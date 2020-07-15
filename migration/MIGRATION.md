# MIGRATION

## AS-IS

```
#1 연구소자료 
http://www.taiwhafound.org/business/lab/lab_data

#2 태화스토리
태화스토리 http://www.taiwhafound.org/story
국내소식 http://www.taiwhafound.org/news/domestic
해외소식 http://www.taiwhafound.org/news/overseas

#3 뉴스레터
http://www.taiwhafound.org/newsletter

#4 이벤트
http://www.taiwhafound.org/event

#5 공지사항
http://www.taiwhafound.org/notice

#6 미디어자료실
http://www.taiwhafound.org/media
```

## TO-BE

```
#1 태화스토리, 국내소식, 해외소식 -> 태화스토리
story
news/domestic
news/overseas

#2 
뉴스레터 -> 뉴스레터
newsletter

#3
공지사항 -> 공지사항

#4
미디어자료실 ->미디어(동영상 등)
```

```sql
--- 공지사항 게시판 관련 파일 유형별 갯수
SELECT
	`TYPE`,
	count(*)
FROM
	FILE_MANAGER_FILE
WHERE
	board_id = 'notice'
GROUP BY `TYPE`;
--- FILE 249
--- IMAGE 80;

--- 공지사항 게시글 수
SELECT
	count(*)
FROM
	NOTICE
WHERE
	USEYN = 'Y';
-- 284

-- 본문내 이미지 URL 치환
-- http://ocean1212.cafe24.com/spaw/upload_file/1285677761.jpg => https://cdn.imweb.me/upload/S20200420439dfe86de087/
-- /file/download/notice-image/ => https://cdn.imweb.me/upload/S20200420439dfe86de087/
-- ?type=editor_c => '' 삭제

SELECT
	'' AS '카테고리ID'
	,n.TITLE AS '제목'
	,REPLACE(
	    REPLACE(
			REPLACE(
	            n.CONTENTS,
	            'http://ocean1212.cafe24.com/spaw/upload_file/',
	            'https://cdn.imweb.me/upload/S20200420439dfe86de087/'
	        ),
	        '/file/download/notice-image/',
	        'https://cdn.imweb.me/upload/S20200420439dfe86de087/'
	    ),
	    '?type=editor_c',
	    ''
	) AS '내용(HTML)'
	,'태화복지재단' AS '작성자'
	,n.REGDATE AS '작성시각'
	,n.VIEW_CNT AS '조회수'
	,'' AS '좋아요수'
	,'' AS '공지여부'
	,'' AS '비밀글'
	,'' AS '비밀번호'
	,GROUP_CONCAT(CONCAT("notice_file/", LEFT(m.HANDLE, 4), "/", MID(m.HANDLE, 5, 4), "/", m.HANDLE) separator '||') AS '첨부파일'
FROM
	NOTICE n
	LEFT OUTER JOIN FILE_MANAGER_FILE m on n.IDX = m.POST_IDX
WHERE
	m.BOARD_ID = 'notice'
	AND m.`TYPE` = 'FILE'
GROUP BY n.IDX ASC;

-- 공지사항 첨부파일만
SELECT
	n.IDX
	,n.TITLE
-- 	,CONCAT("notice_file/", LEFT(m.HANDLE, 4), "/", MID(m.HANDLE, 5, 4), "/", m.HANDLE) AS '첨부파일'
	,GROUP_CONCAT(CONCAT("notice_file/", LEFT(m.HANDLE, 4), "/", MID(m.HANDLE, 5, 4), "/", m.HANDLE) separator '||') AS '첨부파일'
FROM
	NOTICE n
	LEFT OUTER JOIN FILE_MANAGER_FILE m on n.IDX = m.POST_IDX
WHERE
	m.BOARD_ID = 'notice'
	AND m.`TYPE` = 'FILE'
GROUP BY n.IDX ASC;


--- 파일은 있는데 게시글 없는 경우
SELECT
	m.POST_IDX
	,m.HANDLE
	,n.IDX
FROM
	FILE_MANAGER_FILE m
	LEFT OUTER JOIN NOTICE n on m.POST_IDX = n.IDX
WHERE
	n.IDX IS NULL
	AND m.BOARD_ID = 'notice'
ORDER BY m.POST_IDX ASC;


```zsh
cd /Volumes/GoogleDrive/공유 드라이브/Durumi/Project/2002-태화복지재단 홈페이지/migration-0707/images/files/
cat ~/Downloads/1-story-images.csv | xargs -J % cp % ~/Downloads/1-섬김과나눔이야기/
cat ~/Downloads/2-newsletter-images.csv | xargs -J % cp % ~/Downloads/2-뉴스레터/
cat ~/Downloads/3-notice-images.csv | xargs -J % cp % ~/Downloads/3-공지사항/

cd ~/Downloads/upload_file/
cat ~/Downloads/1-news-spaw-images.csv | xargs -J % cp % ~/Downloads/1-섬김과나눔이야기/

```
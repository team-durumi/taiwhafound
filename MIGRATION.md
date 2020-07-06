# MIGRATION

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

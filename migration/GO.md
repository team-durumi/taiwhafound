

```sql
select distinct board_id from FILE_MANAGER_FILE;
```
newsletter
notice
orgdonator
main_banner
media
campaign
staff_board
story
news
history_gallery
lab_business
lab_data
org_logo
event
popup
clean
```

select distinct type from FILE_MANAGER_FILE;
```
newsletter-thumb
IMAGE
FILE
mainbanner-image
campaign-thumb
campaign-banner
story-image
news-image
history-gallery-img
lab-business-thumb
media-image
newsletter-image
event-image
clean-file
```
```

## 1. 섬김과 나눔 이야기 (TAIWHA_STORY, NEWS)
```
6l348RM035
```

### TAIWHA_STORY - story - story-image

```sql
SELECT
	'6l348RM035' AS '카테고리ID'
	,n.TITLE AS '제목'
	,REPLACE(
	    REPLACE(
			REPLACE(
	            n.CONTENTS,
	            'http://ocean1212.cafe24.com/spaw/upload_file/',
	            'https://cdn.imweb.me/upload/S20200420439dfe86de087/'
	        ),
	        '/file/download/story-image/',
	        'https://cdn.imweb.me/upload/S20200420439dfe86de087/'
	    ),
	    '?type=editor_c',
	    ''
	) AS '내용(HTML)'
	,'whitey-s@taiwhafound.org' AS '작성자'
	,n.REGDATE AS '작성시각'
	,n.VIEW_CNT AS '조회수'
	,'' AS '좋아요수'
	,'' AS '공지여부'
	,'' AS '비밀글'
	,'' AS '비밀번호'
	,GROUP_CONCAT(CONCAT("story_image/", LEFT(m.HANDLE, 4), "/", MID(m.HANDLE, 5, 4), "/", m.HANDLE) separator '||') AS '이미지'
FROM
	TAIWHA_STORY n
	LEFT OUTER JOIN FILE_MANAGER_FILE m on n.IDX = m.POST_IDX
WHERE
	m.BOARD_ID = 'story'
	AND m.`TYPE` = 'IMAGE'
GROUP BY n.IDX ASC;
```

### NEWS - news - news-image

```sql
SELECT
	'6l348RM035' AS '카테고리ID'
	,n.TITLE AS '제목'
	,REPLACE(
	    REPLACE(
			REPLACE(
	            n.CONTENTS,
	            'http://ocean1212.cafe24.com/spaw/upload_file/',
	            'https://cdn.imweb.me/upload/S20200420439dfe86de087/'
	        ),
	        '/file/download/news-image/',
	        'https://cdn.imweb.me/upload/S20200420439dfe86de087/'
	    ),
	    '?type=editor_c',
	    ''
	) AS '내용(HTML)'
	,'whitey-s@taiwhafound.org' AS '작성자'
	,n.REGDATE AS '작성시각'
	,n.VIEW_CNT AS '조회수'
	,'' AS '좋아요수'
	,'' AS '공지여부'
	,'' AS '비밀글'
	,'' AS '비밀번호'
	,GROUP_CONCAT(CONCAT("news_image/", LEFT(m.HANDLE, 4), "/", MID(m.HANDLE, 5, 4), "/", m.HANDLE) separator '||') AS '이미지'
FROM
	NEWS n
	LEFT OUTER JOIN FILE_MANAGER_FILE m on n.IDX = m.POST_IDX
WHERE
	m.BOARD_ID = 'news'
	AND m.`TYPE` = 'IMAGE'
GROUP BY n.IDX ASC;
```

## 2. 뉴스레터 NEWS_LETTER

```sql
```
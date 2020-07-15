# 1. 섬김과 나눔 이야기

6l348RM035
태화 스토리 + 뉴스 국내 + 뉴스 해외

```sql
-- 태화 스토리 - 110
SELECT
	count(*)
FROM
	TAIWHA_STORY
WHERE
	USEYN = 'Y';

-- 뉴스 국내 (37) - 2419
SELECT
	count(*)
FROM
	NEWS
WHERE
	USEYN = 'Y'
	AND CATEGORY_CODE IN (
	SELECT
		CODE
	FROM
		COMMON_CODE
	WHERE
		UP_CODE = 37
);
-- 뉴스 해외 (38) - 189
SELECT
	count(*)
FROM
	NEWS
WHERE
	USEYN = 'Y'
	AND CATEGORY_CODE IN (
	SELECT
		CODE
	FROM
		COMMON_CODE
	WHERE
		UP_CODE = 38
);
```

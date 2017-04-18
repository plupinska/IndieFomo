# Schema Information


## user

Column Name | Data Type | Details
------------ | ------------- | ------------
id | integer | not null, primary key
username  | string | not null, indexed, unique
first_name | string| not null, indexed
last_name | string | not null, indexed
about me | text | not null
email | string | not null, indexed, unique
password_digest | string | not null
session_token | string | not null, indexed, unique
location | string| not null
image_url | string | indexed

## campaign

Column Name | Data Type | Details
------------ | ------------- | ------------
id | integer | not null, primary key
user_id | integer |  not null, indexed, unique, foreign key
title | string | not null, indexed
description | text | not null, indexed
tagline | string | not null, indexed
category_id | integer | not null
image_url | integer | indexed
end_date | date | not null, indexed
target_amount | integer | not null, indexed


## contribution

Column Name | Data Type | Details
------------ | ------------- | ------------
id | integer | not null, primary key
user_id | string | not null, indexed, unique, foreign key
reward_id | integer | not null, foreign_key
amount | float | not null, indexed

## reward

Column Name | Data Type | Details
------------ | ------------- | ------------
id | integer | not null, primary key
campaign_id | integer | not null, indexed, foreign key
title | string| not null, indexed
description | string | not null, indexed
image_url | string | not null, indexed
price | integer | not null

## category

Column Name | Data Type | Details
------------ | ------------- | ------------
id | integer | not null, primary key
type | string | not null, unique

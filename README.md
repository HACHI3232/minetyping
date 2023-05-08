# README


##  Word table

| column       | type    | options                 |
|--------------|---------|------------------------|
| id           | integer | not null, primary key   |
| word         | string  | not null               |
| mean         | string  | not null               |
| dictionary_id| integer | not null, foreign key   |

## Dictionary table

| column      | type   | options                 |
|-------------|--------|------------------------|
| id          | integer| not null, primary key   |
| name        | string | not null               |
| description | text   | not null               |

# hackpress-1

Simple Web Aplikasi Blog.

 localhost:8080

## Build Setup

```
# running client-side
npm install

npm run dev

# running server-side
npm install
nodemon app.js atau npm run dev
```

## REST API

| Method | URL      | Description |
|--------|----------|-------------|
| POST   | /register  | Create New User |
| POST   | /login  | Login     |

| Method | URL                          | Deskripsi          |
|--------|------------------------------|----------------------|
| POST   | /articles                | Create new article       |
| GET    | /articles                | Get all articles     |
| GET    | /articles/:id            | Get article by id    |
| PUT    | /articles/:id            | Update article by id |
| DELETE | /articles/:id            | Delete article by id |
|

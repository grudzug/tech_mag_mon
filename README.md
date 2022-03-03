# Tech Magazine (CodeCool exercise)

## Story

Create your own online newspaper - a tech-magazine, use an online news API to fetch the news.

## Tasks

1. Use newsAPI to get the latest tech news. Get an API key, and make sure the user always gets the latest news. Beware the API key's limits and the data usage.
    - The app uses an API key from environment variables, and uses it to fetch the news.
    - NewsAPI is not fetched for every request, but still, fresh news are served.

2. Make the user stay on your site as long as possible. No matter how much they scroll, they should find (older) posts.
    - When the user scrolls down to the oldest news, the app fetches the backend for older articles.
    - The newest article is always on the top.
    - When a newer article are being fetched to the top, user gets a notification to scroll up

## Result

Check live project at:
https://www.techgereblye.tk

## Backend

Express, Prisma, SQLite

## Frontend

React

## Environment Variables

NEWS_API_KEY=your news api key   
(see: https://newsapi.org/)

DATABASE_URL=your database url (default is "file:./dev.db")   
(more info: https://pris.ly/d/prisma-schema#using-environment-variables)

## How to start

cd frontend   
npm install   
npm start   

cd backend   
npm install   
npx prisma init   
npx prisma migrate dev --name init

require('dotenv').config()
const express = require("express")
const path = require("path")
const morgan = require("morgan")
const cors = require("cors")
const { PrismaClient } = require("@prisma/client")
const getData = require("./utils/getData")
const saveData = require("./utils/saveData")
const news = require("./utils/news")

/* import 'dotenv/config'
import express from 'express'
import path from 'path'
import morgan from 'morgan'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import getData from './utils/getData'
import saveData from './utils/saveData'
import news from './utils/news' */

const prisma = new PrismaClient()
const server = express()
const port = 3005
const newsApiKey = process.env.NEWS_API_KEY
const apiUrl =
  "https://newsapi.org/v2/top-headlines?" +
  "country=hu&" +
  "category=technology&" +
  "pageSize=70&" +
  `apiKey=${newsApiKey}`

server.use(express.static(path.join(__dirname, "..", "frontend", "build")))
server.use(cors())
server.use(express.json())
server.use(morgan("dev"))

/* fetching and saving news to db */
async function getNews() {
	try {

    const data = await getData(apiUrl)    /* fetching news */
    const savedData = await saveData(data, prisma)    /* saving news to db */

   } catch (error) {
		console.log("Something went wrong.", error)
	}
}
getNews()   /* fetching news and saving to db at start time */
setInterval(getNews, 3600000)   /* same as abowe, every hour */ 

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'))    /* serving static react frontend */
})

server.get("/news", async (req, res) => {

  try {
    /* getting requested articles from db */
    const response = await news(req, prisma)

    /* sending requested articles to client */
    res.json({ older: response.oldArticles, newer: response.freshArticles })

  } catch (error) {
    console.log(error)
  }
})

server.listen(port, () => {
  console.log(`Listening @ http://localhost:${port}`)
})

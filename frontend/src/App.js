import Wall from "./components/wall/Wall"
import Header from "./components/header/Header"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect } from "react"
import useScroll from './hooks/useScroll'
import useFirstAndLast from './hooks/useFirstAndLast'
import { articlesPerRow } from "./utilities/articlesPerRow"
import getData from './utilities/getData'

function App() {

  const [articles, setArticles] = useState([])
  const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3005"
  const atBottom = useScroll()
  const perRow = articlesPerRow()
  const { first, last } = useFirstAndLast(articles)

  async function getArticles(per_row, last, first) {    /* fetch Articles. Newer than first, older than last */

    const url = `${BASE_URL}/news?per_page=${per_row}&last=${last}&first=${first}`

    try {
      const articlesData = await getData(url)

      if (articlesData.newer.length > 0) toast("Új hír a lap tetején!") 

      setArticles(prevarticles => {
        return [...articlesData.newer, ...prevarticles, ...articlesData.older]
      })
      
    } catch (error) {
      toast(error.message)
    }
  }

  useEffect(() => {
    getArticles(8, last, first)    /* at first render fetch more articles, to fit the whole screen */
  }, [])

  useEffect(() => {   /* if user scrolled to the bottom of the page, fetch more articles */
    if (!atBottom) return
    getArticles(perRow, last, first)
  }, [atBottom])

  return (
    <>
      <ToastContainer theme="dark" />
      <Header />
      <Wall articles={articles} />
    </>
  )
}

export default App

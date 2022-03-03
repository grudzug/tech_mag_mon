import { useState, useEffect } from 'react'

/* returns the newest (first) & the oldest (last) articles by pub time */

export default function useFirstAndLast(data) {

  const [last, setLast] = useState(new Date())
  const [first, setFirst] = useState(new Date())

  function detectLastAndFirst(data) {
    setLast(data[data.length - 1]?.publishedAt)
    setFirst(data[0]?.publishedAt)
  }

  useEffect(() => {
    if (!data) return
    detectLastAndFirst(data)
  }, [data])
  
	return { first, last }
}
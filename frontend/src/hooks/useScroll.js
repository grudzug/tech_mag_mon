import { useState, useEffect } from 'react'

// this function detect if user scrolled down to the bottom of the page

export default function useScroll() {

	const [atBottom, setAtBottom] = useState(false)

	function handleScroll() { 
    if (
      window.innerHeight + window.scrollY <=
      document.getElementById("root").offsetHeight -100
      ) {
      setAtBottom(false)
    } else {
      setAtBottom(true)
    }
  }

	useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

	return atBottom
}
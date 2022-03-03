/* based on viewport width, returns how many grid boxes fit in a row */

function articlesPerRow() {

  const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

  if (viewportWidth > 1024) {
    return 3
  } else if (viewportWidth > 768) {
    return 2
  } else return 1
  
}
export { articlesPerRow }
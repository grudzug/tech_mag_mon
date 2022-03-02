/* this function fetches data from url */

const fetch = require("node-fetch")

async function getData(url) {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`Failed to fetch. ${response?.status} ${response?.statusText}`)
    }
    const data = response.json()
    return data
}
module.exports = getData
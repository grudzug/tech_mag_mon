/* this function fetches data from url */

export default async function getData(url) {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`Failed to fetch. ${response?.status} ${response?.statusText}`)
    }
    const data = response.json()
    return data
}
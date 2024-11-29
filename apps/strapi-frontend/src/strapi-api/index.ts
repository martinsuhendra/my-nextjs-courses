import { homepageQuery } from './query'

export const BASE_URL = 'http://localhost:1337'
export const getStrapiData = async (path: string, query: string) => {
  const url = new URL(path, BASE_URL)

  url.search = query

  try {
    const response = await fetch(url.href, { cache: 'no-store' })
    const data = await response.json()

    return data
  } catch (error) {
    console.error(error)
  }
}

export const getHomepageData = async () => {
  const response = getStrapiData('/api/home-page', homepageQuery)
  return response
}

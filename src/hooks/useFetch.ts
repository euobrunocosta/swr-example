import useSWR from 'swr'

export const useFetch = <Data = any>(url: string) => {
  const { data, error } = useSWR<Data>(url, async url => {
    const reponse = await fetch(url)
    const data = reponse.json()
    return data
  })
  return { data, error }
}
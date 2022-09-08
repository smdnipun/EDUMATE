import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await axios.get(url)
        setData(res.data)
      } catch (err) {
        setError(err)
      }
      setLoading(false)
    }
    fetchData()
  }, [])
  //if we put url in the next argument it will refetch every time we change the url

  const reFetch = async () => {
    setLoading(true)
    try {
      const res = await axios.get(url)
      setData(res.data)
    } catch (err) {
      setError(err)
    }
    setLoading(false)
  }

  return { data, loading, error, reFetch }
}

export default useFetch

import { useState, useEffect } from 'react'
import commFetch from '@/utils/commFetch'

// https://segmentfault.com/a/1190000020148722

interface IObj {
  [propName: string]: any
}

interface IConf {
  method?: string
  credentials?: 'include' | 'same-origin' | 'omit'
  headers?: any
}

const defaultConf: IConf = {
  method: 'POST',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
}

const useFetch = (url: string, body?: string | IObj, options = defaultConf) => {
  // const [fetching, setFetch] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)
  // const [isError, setIsError] = useState(false)
  const [res, setRes] = useState({} as IObj)
  const [err, setErr] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      // setIsError(false)
      // setIsLoading(true)
      try {
        const info = await commFetch.toPost(url, body || {})
        setRes(info)
      } catch (err) {
        setErr('系统异常')
      }
    }
    fetchData()
  }, [body, url])
  return { err, res }
}

export default useFetch
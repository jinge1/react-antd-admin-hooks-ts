import React, { useState, useEffect } from 'react'

interface IObj {
  [propName: string]: any
}

interface IConf {
  method?: string
  credentials?: 'include' | 'same-origin' | 'omit' | undefined
  headers?: any
}

const defaultConf: IConf = {
  method: 'POST',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
}

const baseOrigin = 'http://192.168.34.189:18001/'

const useFetch = (url: string, body: string | IObj = {}, options = defaultConf) => {
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
        const res = await fetch(/^https?/.test(url) ? url : `${baseOrigin}${url}`, {
          ...options,
          body: typeof body === 'object' ? JSON.stringify(body) : body
        })
        const { resultCode, data, code, result } = await res.json()
        if (resultCode === '1' || code === '00') {
          setRes(data || result)
        } else {
          setErr('接口出错')
        }
      } catch (err) {
        setErr('系统异常')
      }
    }
    fetchData()
  }, [])
  return { err, res }
}

export default useFetch
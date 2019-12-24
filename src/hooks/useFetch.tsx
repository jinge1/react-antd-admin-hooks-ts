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
  const [res, setRes] = useState({})
  const [err, setErr] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(/^https?/.test(url) ? url : `${baseOrigin}${url}`, {
          ...options,
          body: typeof body === 'object' ? JSON.stringify(body) : body
        })
        const json = await res.json()
        setRes(json)
      } catch (err) {
        setErr(err)
      }
    }
    fetchData()
  }, [])
  return { err, res }
}

export default useFetch
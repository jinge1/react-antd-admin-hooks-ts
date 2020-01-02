
interface IObject {
  [propName: string]: string
}

type TCredentials = 'include' | 'same-origin' | 'omit'

type TBody = string | {
  [propName: string]: string | Blob
}

export interface IOptions {
  readonly method?: string;
  readonly baseUrl?: string;
  readonly timeout?: number;
  readonly headers?: IObject;
  readonly body?: any;
  readonly credentials?: TCredentials
}

export default class BaseFetch {
  options: IOptions;
  constructor(options: IOptions = {}) {
    this.options = options
  }

  async toFetch(api: string, conf: IOptions) {
    // const { url, config } = this.mixConf(api, conf)
    // try {
    //   const res = await fetch(url, config)
    //   const json = await res.json()
    //   return json
    // } catch (reson) {
    //   // reject(reson)
    //   throw reson
    // }
  }


  mixConf(api: string, conf: IOptions) {
    const { options } = this
    const { method = 'get', baseUrl, headers, body }: IOptions = { ...options, ...conf }
    const localeMethod = method.toLocaleLowerCase()
    let url = /^https?:\/\//.test(api) ? api : this.joinPath(baseUrl || '', api)
    let tempBody: any = body
    let result: IObject | { headers: IObject } = {
      method: method.toUpperCase(),
      url
    }
    if (typeof headers !== 'undefined') {
      result = { ...result, headers }
    }
    if (localeMethod === 'get') {
      result = { ...result, url: `${url}${url.includes('?') ? '&' : '?'}${this.queryStringify(body)}` }
      tempBody = null
    }
    if (typeof body === 'object') {
      const tempHeaders = headers || {}
      const key = Object.keys(tempHeaders).find(key => key.toLocaleLowerCase() === 'content-type') || 'application/x-www-form-urlencoded'
      if (tempHeaders[key].includes('x-www-form-urlencoded')) {
        tempBody = this.queryStringify(body)
      }
      if (tempHeaders[key].includes('application/json')) {
        tempBody = JSON.stringify(body)
      }
      if (tempHeaders[key].includes('multipart/form-data') && !(body instanceof FormData)) {
        tempBody = this.jsonToFormData(body)
      }
    }

    if (tempBody) {
      result = { ...result, body: tempBody }
    }

    return headers ? { ...result, headers } : result
  }

  joinPath(...paths: string[]) {
    return paths.map(p => p.replace(/\/+$/, '')).join('/')
  }

  queryStringify(body: TBody | IObject = '') {
    if (typeof body === 'string') {
      return body
    }
    return Object.keys(body).map(key => `${key}=${typeof body[key] === 'object' ? JSON.stringify(body[key]) : body[key]}`).join('&')
  }

  jsonToFormData(body: TBody = '') {
    if (typeof body === 'string') {
      return body
    }
    const tempFormData = new FormData()
    Object.keys(body).forEach(key => {
      tempFormData.append(key, body[key])
    })
    return tempFormData
  }
}


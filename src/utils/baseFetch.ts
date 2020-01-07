
interface IObject {
  [propName: string]: string
}

type TCredentials = 'include' | 'same-origin' | 'omit'

export type TBody = string | {
  [propName: string]: any
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
    const { url, ...other } = this.mixConf(api, conf)
    try {
      const res = await fetch(url, other)
      const json = await res.json()
      return json
    } catch (reson) {
      throw reson
    }
  }


  mixConf(api: string, conf: IOptions) {
    const { options } = this
    const { method = 'get', headers = {}, body, credentials }: IOptions = { ...options, ...conf }
    const localeMethod = method.toLocaleLowerCase()
    let url = this.getFetchUrl(api, conf)
    let tempBody: any = body
    let result: IObject | { headers: IObject } = {
      method: method.toUpperCase()
    }
    if (typeof headers !== 'undefined') {
      result = { ...result, headers }
    }
    if (localeMethod === 'get') {
      url = `${url}${url.includes('?') ? '&' : '?'}${this.queryStringify(body)}`
      tempBody = null
    }
    if (typeof body === 'object') {
      const key = Object.keys(headers).find(key => key.toLocaleLowerCase() === 'content-type') || 'application/x-www-form-urlencoded'
      if (headers[key].includes('x-www-form-urlencoded')) {
        tempBody = this.queryStringify(body)
      }
      if (headers[key].includes('application/json')) {
        tempBody = JSON.stringify(body)
      }
      if (headers[key].includes('multipart/form-data') && !(body instanceof FormData)) {
        tempBody = this.jsonToFormData(body)
      }
    }

    if (tempBody) {
      result = { ...result, body: tempBody }
    }
    if (headers) {
      result = { ...result, headers }
    }
    if (credentials) {
      result = { ...result, credentials }
    }

    return { url, ...result, headers }
  }

  getFetchUrl(api: string, conf: IOptions = {}) {
    const { options } = this
    const { baseUrl }: IOptions = { ...options, ...conf }
    return /^https?:\/\//.test(api) ? api : this.joinPath(baseUrl || '', api)
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


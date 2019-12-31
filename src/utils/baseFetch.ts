
interface IObject {
  [propName: string]: string
}

type credentials = 'include' | 'same-origin' | 'omit'

export interface IOptions {
  readonly method?: string;
  readonly baseUrl?: string;
  readonly timeout?: number;
  readonly headers?: IObject;
  readonly body?: any;
  readonly credentials?: credentials
}

export default class BaseFetch {
  options: IOptions;
  constructor(options: IOptions = {}) {
    this.options = options
  }

  async toFetch(api: string, conf: IOptions) {
    const { url, config } = this.mixConf(api, conf)
    try {
      const res = await fetch(url, config)
      const json = await res.json()
      return json
    } catch (reson) {
      // reject(reson)
      throw reson
    }
  }


  mixConf(api: string, conf: IOptions) {
    const { options } = this
    const { method, baseUrl, headers, body }: IOptions = { ...options, ...conf }
    const url = /^https?:\/\//.test(api) ? api : this.joinPath(baseUrl || '', api)
    if (method && method.toLocaleLowerCase() === 'get') {
      return {
        url
      }
    }
    return {
      url: '', config: {}
    }
  }

  joinPath(...paths: string[]) {
    return paths.map(p => p.replace(/\/+$/, '')).join('/')
  }

  getParams(body: string | IObject) {

  }

}


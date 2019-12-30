
interface IObject {
  [propName: string]: string
}

type credentials = 'include' | 'same-origin' | 'omit'

export interface IOptions {
  readonly method?: string;
  readonly baseUrl?: string;
  readonly timeout?: number;
  readonly headers?: IObject;
  readonly credentials?: credentials
}

export interface IFetchConf {
  readonly method?: string;
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
    const {method, baseUrl,  } = conf
    return {
      url: '', config: {}
    }
  }

}


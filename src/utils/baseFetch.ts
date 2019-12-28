
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
  constructor(options?: IOptions) {
    this.options = options || {}
  }

  // async toFetch(url: string, conf: IOptions) {
  //   const { fetchUrl, fetchOptions } = this.formateOptions(url: string, conf: IOptions)
  //   return new Promise((resolve, reject) => {
  //     try {
  //       const res = await fetch(fetchUrl, fetchOptions)
  //       const json = await res.json()
  //       resolve(json)
  //     } catch (reson) {
  //       reject(reson)
  //     }
  //   })


  // }
}


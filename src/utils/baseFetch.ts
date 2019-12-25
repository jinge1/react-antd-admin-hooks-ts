
interface IObject {
  [propName: string]: string
}

export interface IOptions {
  readonly method?: string;
  readonly baseUrl?: string;
  readonly timeout?: number;
  readonly headers?: IObject;
  readonly credentials?: 'include' | 'same-origin' | 'omit' | undefined
}

export interface IFetchConf {
  readonly method?: string;
}

export default class BaseFetch {
  constructor(options?: IOptions) {
    console.log(options)
  }

  toFetch(url: string, conf: IOptions) {

  }
}


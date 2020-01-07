import BaseFetch, { IOptions, TBody } from '@/utils/baseFetch'


class CommFetch extends BaseFetch {

  constructor(options: IOptions) {
    super(options)
    this.options = options
  }

  toGet(api: string, body?: TBody, conf: IOptions = {}) {
    return this.toRequest(api, { method: 'get', body, ...conf })
  }

  toPost(api: string, body?: TBody, conf: IOptions = {}) {
    return this.toRequest(api, { method: 'post', body, ...conf })
  }

  toUpload(api: string, body: TBody = {}, conf: IOptions = {}) {
    return this.toRequest(api, { method: 'post', body: this.jsonToFormData(body), ...conf, headers: {} })
  }

  toSubmit(api: string, body: TBody = {}, conf: IOptions = {}) {
    let url = this.getFetchUrl(api, conf)
    const form = document.createElement('form')
    form.method = 'post'
    form.target = '_blank'
    form.action = url
    document.body.appendChild(form)
    Object.keys(body).forEach(key => {
      const tempInput = document.createElement('input')
      tempInput.type = 'hidden'
      tempInput.name = key
      if (typeof body === 'object') {
        tempInput.value = typeof body[key]
      }
      form.appendChild(tempInput)
    })
    form.submit()
    document.body.removeChild(form)
  }

  async toRequest(api: string, conf: IOptions) {
    try {
      const { resultCode, errorDesc, errorCode, code, msg, data, result } = await this.toFetch(this.addMenuId(api), conf)
      if (resultCode === '1' || code === '00') {
        // succ
        return result || data
      } else if (errorCode === '003' || code === '003') {  // to login
        console.log('go to login')
      } else { // error
        throw new Error(errorDesc || msg)
      }
    } catch (reson) {
      throw reson
    }

  }

  addMenuId(api: string) {
    // const { isDev } = this
    // isDev为本地调试使用
    // let menuId = isDev ? sessionStorage.getItem('g_menu_id') : window.parent.g_menu_id
    let menuId = (window.parent as any).g_menu_id || ''
    const contactStr = api.includes('?') ? '&' : '?'
    if (api.includes('menuId=')) {
      return api
    }
    return `${api}${contactStr}menuId=${menuId || ''}`
  }

}

const commFetch = new CommFetch({
  method: 'post',
  baseUrl: 'http://localhost:5000',
  // baseUrl: 'http://192.168.34.189:18001/',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  credentials: 'include'
})

export default commFetch






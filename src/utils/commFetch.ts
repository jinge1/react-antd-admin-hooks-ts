import BaseFetch, { IOptions } from '@/utils/baseFetch'


class CommFetch extends BaseFetch {
  constructor(options: IOptions) {
    super(options)
  }
}

const jsonFetch = new CommFetch({
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  credentials: 'include'
})

const formFetch = new CommFetch({
  credentials: 'include'
})

export default jsonFetch

export {
  formFetch,
  CommFetch
}




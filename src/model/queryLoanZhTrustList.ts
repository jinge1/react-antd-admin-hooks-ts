
interface IOptions {
  [propName: string]: any
}

const columns = [
  {
    title: '申请编号',
    key: 'applyserialNo'
  },
  {
    title: '客户名称',
    key: 'customerName'
  },
  {
    title: '产品名称',
    key: 'productName'
  },
  {
    title: '产品纬度名称',
    key: 'productDimensionName'
  }
]

export default (options?: IOptions) => {
  return {
    api: 'queryLoanZhTrustList',
    columns: columns.map(item => ({ ...item, dataIndex: item.key }))
  }
}
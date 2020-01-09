/**
 * 转账还款认领列表查询
 */

// import ApiModel from '@/utils/core/apiModel'

// 表单信息
const formList = [
  {
    type: 'input',
    label: '贷款申请编号',
    value: '',
    name: 'applyserialNo'
  },
  {
    type: 'input',
    label: '贷款借据编号',
    value: '',
    name: 'serialNo'
  },
  {
    type: 'input',
    label: '客户名称',
    value: '',
    name: 'customerName'
  },
  {
    type: 'input',
    label: '证件号码',
    value: '',
    name: 'certId'
  }
]

// 表格信息
const columns = [
  {
    "title": "贷款申请编号",
    width: 150,
    "key": "applySerialNo"
  },
  {
    "title": "贷款借据编号",
    width: 150,
    "key": "serialNo"
  },
  {
    "title": "产品名称",
    width: 150,
    "key": "productName"
  },
  {
    "title": "产品维度",
    width: 150,
    "key": "productDimensionName"
  },
  {
    "title": "客户名称",
    width: 150,
    "key": "customerName"
  },
  {
    "title": "证件号码",
    width: 150,
    "key": "certId"
  },
  {
    "title": "贷款金额",
    width: 150,
    "key": "businessSum",
    "isMoney": true
  },
  {
    "title": "还款方式",
    width: 150,
    "key": "payTypeDesc"
  },
  {
    "title": "贷款期限",
    width: 150,
    "key": "term"
  },
  {
    "title": "剩余应还本金",
    width: 150,
    "key": "payprincipalAmt"
  },
  {
    "title": "剩余应还利息",
    width: 150,
    "key": "payinterestAmt"
  },
  {
    "title": "剩余应还罚息",
    width: 150,
    "key": "payprincipalpenaltyAmt"
  },
  {
    "title": "剩余应还费用",
    width: 150,
    "key": "feeAmt",
    // "isMoney": true
  }
]

// export default { formList, tableList }

// export default options => {
//   // 接口地址，required
//   const api = 'openserver/queryClaimPaymentList'
//   return new ApiModel({
//     api,
//     formList,
//     tableList,
//     request(params) {
//       return this.post(params)
//     }
//   })
// }





interface IOptions {
  [propName: string]: any
}

export default (options?: IOptions) => {
  return {
    api: 'rlc-mal/openserver/queryClaimPaymentList?menuId=959',
    formList,
    columns: columns.map(item => ({ ...item, dataIndex: item.key }))
  }
}
// /*
//  * @Author: lixiong
//  * @Date: 2019-08-21 14:35:07
//  * @Last Modified by: lixiong
//  * @Last Modified time: 2019-12-12 18:18:59
//  */

// /**
//  * 贷款借据信息详情
//  */

// import ApiModel from '@/utils/core/apiModel'


// // 表格信息
// const formList = [
//   {
//     "type": "input",
//     "label": "贷款申请编号",
//     "value": "",
//     "name": "applySerialNo",
//     "attrs": [
//       "readonly"
//     ]
//   },
//   {
//     "type": "input",
//     "label": "借据编号",
//     "value": "",
//     "name": "serialNo",
//     "attrs": [
//       "readonly"
//     ]
//   },
//   {
//     "type": "input",
//     "label": "客户名称",
//     "value": "",
//     "name": "customerName",
//     "attrs": [
//       "readonly"
//     ]
//   },
//   {
//     "type": "input",
//     "label": "手机号",
//     "value": "",
//     "name": "phone",
//     "attrs": [
//       "readonly"
//     ]
//   },
//   {
//     "type": "input",
//     "label": "证件类型",
//     "value": "",
//     "name": "certTypeDesc",
//     "attrs": [
//       "readonly"
//     ]
//   },
//   {
//     "type": "input",
//     "label": "证件号码",
//     "value": "",
//     "name": "certId",
//     "attrs": [
//       "readonly"
//     ]
//   },
//   {
//     "type": "input",
//     "label": "贷款金额",
//     "value": "",
//     "name": "businessSum",
//     "attrs": [
//       "readonly"
//     ],
//     "isMoney": true
//   },
//   {
//     "type": "input",
//     "label": "产品名称",
//     "value": "",
//     "name": "productName",
//     "attrs": [
//       "readonly"
//     ]
//   },
//   {
//     "type": "input",
//     "label": "产品维度名称",
//     "value": "",
//     "name": "productDimensionName",
//     "attrs": [
//       "readonly"
//     ]
//   },
//   {
//     "type": "input",
//     "label": "剩余本金",
//     "value": "",
//     "name": "payprincipalAmt",
//     "attrs": [
//       "readonly"
//     ]
//   },
//   {
//     "type": "input",
//     "label": "剩余利息",
//     "value": "",
//     "name": "payinterestAmt",
//     "attrs": [
//       "readonly"
//     ]
//   },
//   {
//     "type": "input",
//     "label": "剩余手续费",
//     "value": "",
//     "name": "feeA1Amt",
//     "attrs": [
//       "readonly"
//     ],
//     "isMoney": true
//   },
//   {
//     "type": "input",
//     "label": "剩余平台服务费",
//     "value": "",
//     "name": "feeA2Amt",
//     "attrs": [
//       "readonly"
//     ],
//     "isMoney": true
//   },
//   {
//     "type": "input",
//     "label": "剩余担保费",
//     "value": "",
//     "name": "feeA3Amt",
//     "attrs": [
//       "readonly"
//     ],
//     "isMoney": true
//   },
//   {
//     "type": "input",
//     "label": "剩余展期费",
//     "value": "",
//     "name": "feeA6Amt",
//     "attrs": [
//       "readonly"
//     ],
//     "isMoney": true
//   },
//   {
//     "type": "input",
//     "label": "剩余提前还款违约金",
//     "value": "",
//     "name": "feeA5Amt",
//     "attrs": [
//       "readonly"
//     ]
//   },
//   {
//     "type": "input",
//     "label": "剩余还款计划变更费",
//     "value": "",
//     "name": "feeA8Amt",
//     "attrs": [
//       "readonly"
//     ],
//     "isMoney": true
//   },
//   {
//     "type": "input",
//     "label": "逾期罚息余额",
//     "value": "",
//     "name": "payprincipalpenaltyAmt",
//     "attrs": [
//       "readonly"
//     ],
//     "isMoney": true
//   },
//   {
//     "type": "input",
//     "label": "剩余应还总金额",
//     "value": "",
//     "name": "totalAmt",
//     "attrs": [
//       "readonly"
//     ],
//     "isMoney": true
//   }
// ]

// export default (options = {}) => {
//   // 接口地址: required
//   const api = 'openserver/queryClaimPaymentInfo'

//   return new ApiModel({
//     api,
//     formList,
//     request(params) {
//       return this.post(params)
//     }
//   })
// }

export default {}
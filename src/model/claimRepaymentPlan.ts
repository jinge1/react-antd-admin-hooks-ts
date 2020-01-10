// /**
//  * 待还还款计划信息
//  */

// import ApiModel from '@/utils/core/apiModel'

// // 表格信息
// const tableList = [
//   {
//     label: '期次',
//     attrs: { width: 'auto' },
//     prop: 'periodNo'
//   },
//   {
//     label: '计划还款日',
//     attrs: { width: 'auto' },
//     prop: 'payDate'
//   },
//   {
//     label: '本期待还本金',
//     attrs: { width: 'auto' },
//     prop: 'principalBalance',
//     isMoney: true
//   },
//   {
//     label: '本期待还利息',
//     attrs: { width: 'auto' },
//     prop: 'interestBalance',
//     isMoney: true
//   },
//   {
//     label: '本期待还罚息',
//     attrs: { width: 'auto' },
//     prop: 'penaltyBalance',
//     isMoney: true
//   },
//   {
//     label: '本期待还费用',
//     attrs: { width: 'auto' },
//     prop: 'feeBalance',
//     isMoney: true
//   }
// ]

// export default options => {
//   // 接口地址，required
//   const api = 'server/claimRepaymentPlan'
//   return new ApiModel({
//     api,
//     tableList,
//     request(params) {
//       return this.post(params)
//     }
//   })
// }

export default {}

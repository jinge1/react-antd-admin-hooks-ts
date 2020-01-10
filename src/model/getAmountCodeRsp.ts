// /*
//  * @Author: lixiong
//  * @Date: 2019-08-21 14:35:07
//  * @Last Modified by: lixiong
//  * @Last Modified time: 2019-12-12 18:19:56
//  */

// /**
//  * 入账顺序的多选
//  */

// import ApiModel from '@/utils/core/apiModel'

// export default options => {
//   // 接口地址: required
//   const api = 'openserver/getAmountCodeRsp'

//   return new ApiModel({
//     api,
//     request(body) {
//       return this.post(body)
//     },
//     computedItem(item) {
//       let { itemNo, itemName } = item
//       return { label: itemName, value: itemNo }
//     }
//   })
// }

export default {}
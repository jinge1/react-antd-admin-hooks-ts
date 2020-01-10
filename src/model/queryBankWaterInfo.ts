// /*
//  * @Author: lixiong
//  * @Date: 2019-08-21 14:35:07
//  * @Last Modified by: lixiong
//  * @Last Modified time: 2019-12-12 18:19:28
//  */

// /**
//  * 待认领资金查询
//  */

// import ApiModel from '@/utils/core/apiModel';

// // 表单信息
// const formList = [
//   {
//     type: 'input',
//     label: '对公结算户账号',
//     value: '',
//     name: 'acctNo'
//   },
//   {
//     type: 'input',
//     label: '客户结算虚拟号',
//     value: '',
//     name: 'psbnBr'
//   },
//   {
//     type: 'dateRange',
//     label: '收款日期',
//     value: [],
//     name: 'etyDatAll',
//     names: ['etyDatBegin', 'etyDatEnd']
//   },
//   // {
//   //   type: 'dateRange',
//   //   label: '贷款发放日期',
//   //   value: [],
//   //   name: 'putoutDate',
//   //   names: ['beginPutoutDate', 'endPutoutDate']
//   // },
//   {
//     type: 'input',
//     label: '绑定客户名称',
//     value: '',
//     name: 'cltNam'
//   },
//   {
//     type: 'input',
//     label: '转账付方名称',
//     value: '',
//     name: 'rpyCustomerNam'
//   },
//   {
//     type: 'input',
//     label: '转账付方银行账号',
//     value: '',
//     name: 'rpyCustomerNo'
//   },
//   {
//     type: 'input',
//     label: '收付金额',
//     name: 'crtAmtAllSum',
//     children: [
//       {
//         type: 'input',
//         value: '',
//         name: 'crtAmtBegin'
//       },
//       {
//         type: 'input',
//         value: '',
//         name: 'crtAmtEnd'
//       }
//     ],
//     isMoney: true
//   },
//   // {
//   //   type: 'input',
//   //   label: '收付金额',
//   //   name: 'claimAllSum',
//   //   children: [
//   //     {
//   //       type: 'input',
//   //       value: '',
//   //       name: 'crtAmtBegin'
//   //     },
//   //     {
//   //       type: 'input',
//   //       value: '',
//   //       name: 'crtAmtEnd'
//   //     }
//   //   ]
//   // },
//   {
//     type: 'input',
//     label: '转账备注',
//     value: '',
//     name: 'trxTxt'
//   },
//   {
//     type: 'input',
//     label: '银行交易流水号',
//     value: '',
//     name: 'trxnBr'
//   }
// ];

// // 表格信息
// const tableList = [
//   {
//     label: '银行交易流水号',
//     prop: 'trxnBr'
//   },
//   {
//     label: '对公结算户账号',
//     prop: 'acctNo'
//   },
//   {
//     label: '对公结算户户名',
//     prop: 'acctName'
//   },
//   {
//     label: '转账付方银行账号',
//     prop: 'rpyAcc'
//   },
//   {
//     label: '转账付方名称',
//     prop: 'rpyNam'
//   },
//   {
//     label: '客户结算虚拟号',
//     prop: 'psbnBr'
//   },
//   {
//     label: '绑定客户名称',
//     prop: 'cltNam'
//   },
//   {
//     label: '收付金额',
//     prop: 'crtAmt',
//     isMoney: true
//   },
//   {
//     label: '剩余待认领金额',
//     prop: 'coreBalance',
//     isMoney: true
//   },
//   {
//     label: '转账备注',
//     prop: 'trxTxt'
//   },
//   {
//     label: '收款日期',
//     prop: 'etyDat'
//   },
//   {
//     label: '认领状态',
//     prop: 'statusDesc'
//   },
//   {
//     label: '项目名称',
//     prop: 'projectName'
//   }
// ];

// export default options => {
//   // 接口地址，required
//   const api = 'openserver/queryBankWaterInfo';
//   return new ApiModel({
//     api,
//     formList,
//     tableList,
//     request(params) {
//       return this.post(params);
//     }
//   });
// };

export default {}
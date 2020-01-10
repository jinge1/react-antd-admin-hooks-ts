// /*
//  * @Author: lixiong
//  * @Date: 2019-08-21 14:35:07
//  * @Last Modified by: lixiong
//  * @Last Modified time: 2019-12-23 14:09:21
//  */

// /**
//  * 还款申请信息
//  */

// import ApiModel from '@/utils/core/apiModel';

// // 表格信息
// const formList = [
//   {
//     type: 'input',
//     label: '申请类型',
//     value: '',
//     name: 'applyTypeDesc',
//     attrs: ['readonly']
//   },
//   {
//     type: 'input',
//     label: '申请还款金额',
//     value: '',
//     name: 'payAmt',
//     rules: ['required'],
//     isMoney: true
//   },
//   {
//     type: 'select',
//     label: '入账项目及顺序',
//     value: [],
//     name: 'payRulesArray',
//     descName: 'payRuleDesc',
//     attrs: ['filterable', 'multiple', 'clearable', 'collapse-tags'],
//     options: [],
//     rules: ['required']
//   },
//   {
//     type: 'select',
//     label: '结清类型',
//     value: [],
//     name: 'finishTypeArray',
//     attrs: ['filterable', 'multiple', 'clearable', 'collapse-tags'],
//     descName: 'finishtypeDesc',
//     rules: ['required']
//   },
//   {
//     type: 'input',
//     label: '其他结清类型',
//     value: '',
//     name: 'otherFinishType',
//     // descName: 'otherFinishTypeDesc',
//     rules: ['required']
//   },
//   {
//     type: 'select',
//     label: '减免类型',
//     value: [],
//     name: 'reductionTypeArray',
//     attrs: ['filterable', 'multiple', 'clearable', 'collapse-tags'],
//     descName: 'reductionTypeDesc',
//     rules: ['required']
//   },
//   {
//     type: 'select',
//     label: '还款来源类型',
//     value: [],
//     name: 'sourcesTypeArray',
//     attrs: ['filterable', 'multiple', 'clearable', 'collapse-tags'],
//     descName: 'sourcesTypeDesc',
//     rules: ['required']
//   },
//   {
//     type: 'input',
//     label: '其他还款来源类型',
//     value: '',
//     name: 'otherSourcesType',
//     // descName: 'otherSourcesTypeDesc',
//     rules: ['required']
//   },
//   {
//     type: 'input',
//     label: '提前归还本金金额',
//     value: '',
//     name: 'principalBalance',
//     attrs: ['readonly'],
//     isMoney: true
//   },
//   {
//     type: 'input',
//     label: '提前归还利息金额',
//     value: '',
//     name: 'interestBalance',
//     attrs: ['readonly'],
//     isMoney: true
//   },
//   {
//     type: 'input',
//     label: '提前归还手续费金额',
//     value: '',
//     name: 'interestBalanceA1',
//     attrs: ['readonly'],
//     isMoney: true
//   },
//   {
//     type: 'input',
//     label: '提前归还担保费金额',
//     value: '',
//     name: 'interestBalanceA3',
//     attrs: ['readonly'],
//     isMoney: true
//   },
//   {
//     type: 'input',
//     label: '提前归还平台服务费金额',
//     value: '',
//     name: 'interestBalanceA2',
//     attrs: ['readonly'],
//     isMoney: true
//   },
//   {
//     type: 'input',
//     label: '提前归还提前还款违约金金额',
//     value: '',
//     name: 'interestBalanceA5',
//     attrs: ['readonly'],
//     isMoney: true
//   },
//   {
//     type: 'input',
//     label: '提前归还展期费金额',
//     value: '',
//     name: 'interestBalanceA6',
//     attrs: ['readonly'],
//     isMoney: true
//   },
//   {
//     type: 'input',
//     label: '提前归还还款计划变更费金额',
//     value: '',
//     name: 'interestBalanceA8',
//     attrs: ['readonly'],
//     isMoney: true
//   },
//   {
//     type: 'input',
//     label: '提前归还逾期罚息金额',
//     value: '',
//     name: 'palpenaltyBalance',
//     attrs: ['readonly'],
//     isMoney: true
//   },
//   {
//     type: 'input',
//     label: '提前结清应还总金额',
//     value: '',
//     name: 'balance',
//     attrs: ['readonly'],
//     isMoney: true
//   },
//   {
//     type: 'input',
//     label: '申请日期',
//     value: '',
//     name: 'inputDate',
//     attrs: ['readonly']
//   },
//   {
//     type: 'input',
//     label: '申请时间',
//     value: '',
//     name: 'inputTime',
//     attrs: ['readonly']
//   },
//   {
//     type: 'input',
//     label: '申请人',
//     value: '',
//     name: 'inputUserName',
//     attrs: ['readonly']
//   },
//   {
//     type: 'input',
//     label: '申请人直属机构',
//     value: '',
//     name: 'inputOrgName',
//     attrs: ['readonly']
//   }
// ];

// export default options => {
//   // 接口地址，required
//   const api = 'openserver/claimTrialPayment';
//   return new ApiModel({
//     api,
//     formList,
//     request(params) {
//       return this.post(params);
//     }
//   });
// };

export default {}
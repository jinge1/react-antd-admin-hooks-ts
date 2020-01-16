/**
 * 还款申请信息
 */
import { IInputItem } from '@/types/form'



// import ApiModel from '@/utils/core/apiModel';

// 表单信息
const formList: IInputItem[] = [
  {
    type: 'input',
    label: '申请类型',
    value: '',
    name: 'applyTypeDesc',
    rules: [
      {
        required: true,
        message: 'who are you?'
      }
    ]
  },
  {
    type: 'input',
    label: '申请还款金额',
    value: '',
    name: 'payAmt',
    isMoney: true
  },
  {
    type: 'select',
    label: '入账项目及顺序',
    value: ['10'],
    name: 'payRulesArray',
    options: [],
    rules: [
      {
        required: true,
        message: 'who are you?'
      }
    ]
  },
  {
    type: 'select',
    label: '结清类型',
    value: [],
    name: 'finishTypeArray',
    attrs: ['filterable', 'multiple', 'clearable', 'collapse-tags'],
    descName: 'finishtypeDesc'
  },
  {
    type: 'input',
    label: '其他结清类型',
    value: '',
    name: 'otherFinishType',
    // descName: 'otherFinishTypeDesc'
  },
  {
    type: 'select',
    label: '减免类型',
    value: [],
    name: 'reductionTypeArray',
    attrs: ['filterable', 'multiple', 'clearable', 'collapse-tags'],
    descName: 'reductionTypeDesc'
  },
  {
    type: 'select',
    label: '还款来源类型',
    value: [],
    name: 'sourcesTypeArray',
    attrs: ['filterable', 'multiple', 'clearable', 'collapse-tags'],
    descName: 'sourcesTypeDesc'
  },
  {
    type: 'input',
    label: '其他还款来源类型',
    value: '',
    name: 'otherSourcesType',
    // descName: 'otherSourcesTypeDesc'
  },
  {
    type: 'input',
    label: '提前归还本金金额',
    value: '',
    name: 'principalBalance',
    attrs: ['readonly'],
    isMoney: true
  },
  {
    type: 'input',
    label: '提前归还利息金额',
    value: '',
    name: 'interestBalance',
    attrs: ['readonly'],
    isMoney: true
  },
  {
    type: 'input',
    label: '提前归还手续费金额',
    value: '',
    name: 'interestBalanceA1',
    attrs: ['readonly'],
    isMoney: true
  },
  {
    type: 'input',
    label: '提前归还担保费金额',
    value: '',
    name: 'interestBalanceA3',
    attrs: ['readonly'],
    isMoney: true
  },
  {
    type: 'input',
    label: '提前归还平台服务费金额',
    value: '',
    name: 'interestBalanceA2',
    attrs: ['readonly'],
    isMoney: true
  },
  {
    type: 'input',
    label: '提前归还提前还款违约金金额',
    value: '',
    name: 'interestBalanceA5',
    attrs: ['readonly'],
    isMoney: true
  },
  {
    type: 'input',
    label: '提前归还展期费金额',
    value: '',
    name: 'interestBalanceA6',
    attrs: ['readonly'],
    isMoney: true
  },
  {
    type: 'input',
    label: '提前归还还款计划变更费金额',
    value: '',
    name: 'interestBalanceA8',
    attrs: ['readonly'],
    isMoney: true
  },
  {
    type: 'input',
    label: '提前归还逾期罚息金额',
    value: '',
    name: 'palpenaltyBalance',
    attrs: ['readonly'],
    isMoney: true
  },
  {
    type: 'input',
    label: '提前结清应还总金额',
    value: '',
    name: 'balance',
    attrs: ['readonly'],
    isMoney: true
  },
  {
    type: 'input',
    label: '申请日期',
    value: '',
    name: 'inputDate',
    attrs: ['readonly']
  },
  {
    type: 'input',
    label: '申请时间',
    value: '',
    name: 'inputTime',
    attrs: ['readonly']
  },
  {
    type: 'input',
    label: '申请人',
    value: '',
    name: 'inputUserName',
    attrs: ['readonly']
  },
  {
    type: 'input',
    label: '申请人直属机构',
    value: '',
    name: 'inputOrgName',
    attrs: ['readonly']
  }
];


interface IOptions {
  [propName: string]: any
}

export default (options?: IOptions) => {
  return {
    api: 'rlc-mal/openserver/claimTrialPayment',
    formList
  }
}
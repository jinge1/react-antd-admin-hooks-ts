
import { IState } from '@/store/state'
import commFetch from '@/utils/commFetch'
import qryProdList from '@/model/qryProdList'
import qryFlowPhaseList from '@/model/qryFlowPhaseList'

export const SET_MENU_LIST: string = 'SET_MENU_LIST'
export const SET_OPTIONS: string = 'SET_OPTIONS'
export const SET_FLOW_PHASE: string = 'SET_FLOW_PHASE'
export const SET_PRODUCT_NAME: string = 'SET_PRODUCT_NAME'

export interface IObject {
  [propName: string]: any
}

export interface IAction extends IObject {
  type: string;
}

export interface IDispatch {
  (action: IAction): void
}

const { api, format } = qryProdList()
const { api: productApi, format: productFormat } = qryFlowPhaseList()

/**
 * asyncReducer 异步reducer
 * @param action 
 * @param dispatch 
 */
export const asyncReducer = (action: IAction, dispatch: IDispatch) => {
  const { type, ...info } = action
  const actions = {
    async [SET_MENU_LIST](info: IObject, dispatch: IDispatch) {
      try {
        const { list } = await commFetch.toPost('sso-portal/menu/getUserMenu')
        dispatch({ type: SET_MENU_LIST, menuList: list })
      } catch (e) {
        console.log(e)
      }
    },
    async [SET_FLOW_PHASE](info: IObject, dispatch: IDispatch) {
      const { key, body } = info
      try {
        const list = await commFetch.toPost(productApi, body)
        dispatch({ type: SET_OPTIONS, [key]: productFormat(list) })
      } catch (e) {
        console.log(e)
      }
    },
    async [SET_PRODUCT_NAME](info: IObject, dispatch: IDispatch) {
      const { key, body } = info
      try {
        const list = await commFetch.toPost(api, body)
        dispatch({ type: SET_OPTIONS, [key]: format(list) })
      } catch (e) {
        console.log(e)
      }
    }
  }
  if (typeof actions[type] !== 'function') {
    throw new Error(`方法 ${type} 不存在！`)
  }
  actions[type](info, dispatch)
}

/**
 * reducer 同步reducer
 * @param state
 * @param action
 */
export const reducer = (state: IState, action: IAction) => {
  const { type, ...info } = action
  const actions = {
    [SET_MENU_LIST](info: IObject) {
      return { ...state, ...info }
    },
    [SET_OPTIONS](info: IObject) {
      console.log('info', info)
      const { options, ...other } = state
      return { ...other, options: { ...options, ...info } }
    }
  }
  if (typeof actions[type] !== 'function') {
    return state
  }
  return actions[type](info)
}


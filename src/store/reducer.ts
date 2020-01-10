
import { IState } from '@/store/state'
import commFetch from '@/utils/commFetch'

export const SET_MENU_LIST: string = 'SET_MENU_LIST'

export interface IObject {
  [propName: string]: any
}

export interface IAction extends IObject {
  type: string;
}

export interface IDispatch {
  (action: IAction): void
}

export const reducers = {
  [SET_MENU_LIST](state: IState, info: IObject) {
    return { ...state, ...info }
  }
}

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
    }
  }
  if (typeof actions[type] !== 'function') {
    return state
  }
  return actions[type](info)
}


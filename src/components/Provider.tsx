import React, { useReducer, createContext } from 'react'

export const storeContext: any = createContext({})

export const SET_MENU_LIST: string = 'SET_MENU_LIST'

interface IAction {
  type: string;
  [propName: string]: any
}

interface IActions {
  [propName: string]: any
}

const initialState = {
  menuList: []
}


const asyncReducer = (action: IAction, dispatch: any) => {
  const actions: IActions = {
    SET_MENU_LIST(action: IAction) {
      console.log(1)
    }
  }
  switch (action.type) {
    case SET_MENU_LIST:
      actions[action.type]()
    default:
      return ''
  }
}

const reducer = (state: any, action: IAction) => {
  switch (action.type) {
    case SET_MENU_LIST:
      return { ...state, menuList: action.list }
    default:
      return state
  }
}



/**
*  action 支持传入一个异步的函数,如：
*  const increaseCount = async dispatch => {
*      await sleep(1000);
*      dispatch({ type: 'increase' });
*  }
*  调用：
*  dispatch(increaseCount)
*/
const StoreReducer = (props: { children: any }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const asyncDispatch = (action: any) => {
    asyncReducer(action, dispatch)
  }
  // const dispatch = (action: any) => {
  //   if (typeof action === 'function') {
  //     action(origin_dispatch);
  //   }
  //   origin_dispatch(action);
  // }
  return (
    <storeContext.Provider value={{ state, dispatch, asyncDispatch }}>
      {props.children}
    </storeContext.Provider>
  )
}

export default StoreReducer
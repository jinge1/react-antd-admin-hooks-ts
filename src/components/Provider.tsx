import React, { useReducer, createContext } from 'react'

export const storeContext: any = createContext({})

export const SET_MENU_LIST: string = 'SET_MENU_LIST'

const initialState = {
  menuList: []
}

const asyncReducer = (action: any, dispatch: any) => {
  // const obj = {
  //   ['SET_MENU_LIST'](action) {

  //   }
  // }
}

const reducer = (state: any, action: any) => {
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
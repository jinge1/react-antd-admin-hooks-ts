import React, { useReducer, createContext, useCallback } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import initState from '@/store/state'
import { reducer, asyncReducer, IAction } from '@/store/reducer'

export const storeContext: any = createContext({})

export const SET_MENU_LIST: string = 'SET_MENU_LIST'

const Provider = (props: any) => {
  const history = useHistory()
  const [state, dispatch] = useReducer(reducer, initState)
  const asyncDispatch = useCallback((action: IAction) => {
    asyncReducer(action, dispatch)
  }, [])
  return (
    <storeContext.Provider value={{ state, dispatch, asyncDispatch, history, useParams }}>
      {props.children}
    </storeContext.Provider>
  )
}

export default Provider
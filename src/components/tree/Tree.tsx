import React, { FC, useContext, useEffect } from 'react'
// import { Tree } from 'antd'
import { storeContext } from '@/components/Provider'
// import useFetch from '@/hooks/useFetch'

// const { TreeNode } = Tree

const NavTree: FC = () => {
  const { state, dispatch } = useContext(storeContext)
  console.log(state)
  useEffect(() => {
    // dispatch({ type: 'SET_MENU_LIST', list: [1, 2, 3] })
    dispatch((realDispatch: any) => {
      // console.log(realDispatch)
      realDispatch({ type: 'SET_MENU_LIST', list: [1, 2, 3] })
    })
  }, [])

  // const { err, res } = useFetch('sso-portal/menu/getUserMenu')
  // return res.list ? <div>{res.list.length}</div> : <p>loading…</p>
  return <p>{state.menuList.length}</p>
}

export default NavTree

import React, { FC, useContext, useEffect } from 'react'
// import { Tree } from 'antd'
import { storeContext } from '@/components/Provider'
// import useFetch from '@/hooks/useFetch'

// const { TreeNode } = Tree

const NavTree: FC = () => {
  const { state, dispatch, asyncDispatch } = useContext(storeContext)
  console.log(state)
  useEffect(() => {
    asyncDispatch({type: 'SET_MENU_LIST'})
    dispatch({ type: 'SET_MENU_LIST', menuList: [9, 1] })
  }, [dispatch, asyncDispatch])

  // const { err, res } = useFetch('sso-portal/menu/getUserMenu')
  // return res.list ? <div>{res.list.length}</div> : <p>loading…</p>
  return <p>{state.menuList.length}</p>
}

export default NavTree

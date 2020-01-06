import React, { FC, useContext, useEffect } from 'react'
import { Tree } from 'antd'
import { storeContext } from '@/components/Provider'
// import useFetch from '@/hooks/useFetch'

const { TreeNode } = Tree

type TList = {
  children?: TList[],
  [propName: string]: any
}

const NavTree: FC = () => {
  const { state, dispatch, asyncDispatch, history } = useContext(storeContext)
  const { menuList } = state
  useEffect(() => {
    asyncDispatch({ type: 'SET_MENU_LIST' })
  }, [dispatch, asyncDispatch])
  const expandedKeys: string[] = ['1021']
  const select = (arr: string[]) => {
    if (arr[0] === '1021003') {
      history.push('/list')
    }
  }

  const loop = (list: TList) => list.map((item: TList) => {
    const { children, resourceCode, resourceName } = item
    if (Array.isArray(children) && children.length > 0) {
      return (
        <TreeNode key={resourceCode} title={resourceName}>
          {loop(children)}
        </TreeNode>
      )
    }
    return <TreeNode key={resourceCode} title={resourceName} />
  })
  return menuList.length > 0 ? (
    <Tree
      onSelect={select}
      blockNode={true}
      defaultExpandedKeys={expandedKeys}
    >
      {loop(menuList)}
    </Tree>
  ) : <p>loading…</p>
}

export default NavTree

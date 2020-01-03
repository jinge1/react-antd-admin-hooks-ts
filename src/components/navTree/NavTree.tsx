import React, { FC, useContext, useEffect, Children } from 'react'
import { Tree } from 'antd'
import { storeContext } from '@/components/Provider'
// import useFetch from '@/hooks/useFetch'

const { TreeNode } = Tree

type TList = {
  children?: TList[],
  [propName: string]: any
}

const NavTree: FC = () => {
  const { state, dispatch, asyncDispatch } = useContext(storeContext)
  const { menuList } = state
  useEffect(() => {
    asyncDispatch({ type: 'SET_MENU_LIST' })
  }, [dispatch, asyncDispatch])
  const expandedKeys: string[] = []
  const dragEnter = (info: any) => { console.log(info) }
  const drop = (info: any) => { console.log(info) }

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
    <Tree onDragEnter={dragEnter}
      onDrop={drop}
      defaultExpandedKeys={expandedKeys}
    >
      {loop(menuList)}
    </Tree>
  ) : <p>loading…</p>
}

export default NavTree

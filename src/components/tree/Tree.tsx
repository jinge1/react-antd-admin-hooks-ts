import React, { FC } from 'react'
import { Tree } from 'antd'
import useFetch from '@/hooks/useFetch'

const { TreeNode } = Tree

const NavTree: FC = () => {
  const { err, res } = useFetch('sso-portal/menu/getUserMenu')
  return res.list ? <div>{res.list.length}</div> : <p>loading…</p>
}

export default NavTree

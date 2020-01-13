import React, { FC, useState } from 'react'
import styled from '@emotion/styled'
import CommForm from '@/components/commForm/CommForm'
import CommTable from '@/components/commTable/CommTable'
import useFetch from '@/hooks/useFetch'
import queryClaimPaymentList from '@/model/queryClaimPaymentList'
import { NavLink } from 'react-router-dom'


interface IObject {
  [propName: string]: any
}

const { api, columns, formList } = queryClaimPaymentList()

const Div = styled.div`
  background: #fff;
  margin-top: 10px;
`

const selectItems = {
  productIdArray: {
    key: 'productIdArray',
    body: {}
  },
  phaseNoArray: {
    key: 'phaseNoArray',
    body: {}
  },
}

// 转账还款认领
const Home: FC = () => {
  const [body, setBody] = useState({})
  const { err, res } = useFetch(api, body)
  const { records = [] } = res
  const actionItem = {
    "title": "操作管理",
    width: 150,
    "key": "action",
    fixed: 'right',
    render: (text: string, record: any) => <NavLink to={`/edit/?serialNo=${record.serialNo}`}>编辑</NavLink>
  }

  console.log('err', err)

  return (
    <Div>
      <CommForm name="home-form" selectItems={selectItems} list={formList} callback={(values: IObject) => setBody(values)}></CommForm>
      <CommTable rowKey="serialNo" records={records} columns={[...columns, actionItem]}></CommTable>
    </Div>
  );
}

export default Home
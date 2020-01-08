import React, { FC } from 'react'
import { Table } from 'antd'
import styled from '@emotion/styled'
import useFetch from '@/hooks/useFetch'
import queryClaimPaymentList from '@/model/queryClaimPaymentList'


// type MyProps = {
//   color: string,
//   width: number
// }

const Div = styled.div`
width:100%;
overflow:hidden;
  background: #fff;
`


const Home: FC = () => {
  const { api, columns } = queryClaimPaymentList()
  const { err, res } = useFetch(api, { "transCode": "", "currentPage": 1, "pageSize": 10, "applyserialNo": "", "serialNo": "", "customerName": "", "certId": "" })
  const { records = [] } = res
  // const actionItem = {
  //   "title": "操作管理",
  //   width: 150,
  //   "key": "action",
  //   fixed: 'right',
  //   render: () => <span>action</span>,
  // }
  console.log(columns.reduce((pre, curr) => pre + curr.width, 0))
  return (
    <Div>
      <p>转账还款认领</p>
      <Table scroll={{ x: columns.reduce((pre, curr) => pre + curr.width, 100), y: 200 }} rowKey="applySerialNo" dataSource={records.map((item: any) => ({ ...item, key: item.applyserialNo }))} columns={columns} />
    </Div>
  );
}

export default Home
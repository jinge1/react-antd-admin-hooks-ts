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
  background: #fff;
`


const Home: FC = () => {
  const { api, columns } = queryClaimPaymentList()
  const { err, res } = useFetch(api, { "transCode": "", "currentPage": 1, "pageSize": 10, "applyserialNo": "", "serialNo": "", "customerName": "", "certId": "" })
  const { records = [] } = res
  return (
    <Div className="Home">
      <p>转账还款认领</p>
      <Table dataSource={records.map((item: any) => ({ ...item, key: item.applyserialNo }))} columns={columns} />
    </Div>
  );
}

export default Home
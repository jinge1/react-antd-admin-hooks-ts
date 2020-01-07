import React, { FC } from 'react'
import { Table } from 'antd'
import styled from '@emotion/styled'
import useFetch from '@/hooks/useFetch'
import queryLoanZhTrustList from '@/model/queryLoanZhTrustList'


// type MyProps = {
//   color: string,
//   width: number
// }

const Div = styled.div`
  background: #fff;
`


const Home: FC = () => {
  const { api, columns } = queryLoanZhTrustList()
  const { err, res } = useFetch(api, {})
  const { records = [] } = res
  return (
    <Div className="Home">
      <Table dataSource={records.map((item: any) => ({ ...item, key: item.applyserialNo }))} columns={columns} />
    </Div>
  );
}

export default Home
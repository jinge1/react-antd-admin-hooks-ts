import React, { FC } from 'react'
import { Table } from 'antd'
import styled from '@emotion/styled'
import { IColumn } from '@/types/tabel'


interface IRecord {
  [propName: string]: any
}

interface IProps {
  rowKey: string;
  records: IRecord[];
  columns: IColumn[];
}

const Div = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
`


// 转账还款认领
const CommTable: FC<IProps> = (props: IProps) => {
  const { rowKey, records, columns } = props
  const x = columns.reduce((pre, { width = 100 }) => pre + width, 0)
  console.log('x: ', x)
  return (
    <Div><Table style={{ width: '100%' }} scroll={{ x, y: 200 }} rowKey={rowKey} dataSource={records.map((item: any) => ({ ...item }))} columns={columns.map(item => ({ ...item, dataIndex: item.key }))} /></Div>
  );
}

export default CommTable
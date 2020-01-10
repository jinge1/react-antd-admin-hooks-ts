import React, { FC } from 'react'
import { Table } from 'antd'


interface IRecord {
  width?: number;
}

interface IColumn {
  width?: number;
}

interface IProps {
  rowKey: string;
  records: IRecord[];
  columns: IColumn[];
}

// 转账还款认领
const CommTable: FC<IProps> = (props: IProps) => {
  const { rowKey, records, columns } = props
  const x = columns.reduce((pre, curr) => pre + (curr.width || 100), 0)
  return (
    <Table scroll={{ x, y: 200 }} rowKey={rowKey} dataSource={records.map((item: any) => ({ ...item }))} columns={columns} />
  );
}

export default CommTable
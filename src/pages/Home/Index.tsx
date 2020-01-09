import React, { FC } from 'react'
import { Table, Form, Input, Button } from 'antd'
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

// https://blog.csdn.net/qq_37674616/article/details/84372896
const Home: FC = () => {
  const { api, formList, columns } = queryClaimPaymentList()
  const { err, res } = useFetch(api, { "transCode": "", "currentPage": 1, "pageSize": 10, "applyserialNo": "", "serialNo": "", "customerName": "", "certId": "" })
  const { records = [] } = res
  // const actionItem = {
  //   "title": "操作管理",
  //   width: 150,
  //   "key": "action",
  //   fixed: 'right',
  //   render: () => <span>action</span>,
  // }
  const x = columns.reduce((pre, curr) => pre + curr.width, 0)
  const submit = (values: any) => { console.log(values) }
  const RegistrationForm = (props: any) => {
    const { getFieldDecorator } = props.form
    return (
      <Form onSubmit={submit}>
        {getFieldDecorator('note', {
          rules: [{ required: true, message: 'Please input your note!' }],
        })(<Input />)}
      </Form>
    )
  }

  const HomeForm = Form.create({ name: 'home-form' })(RegistrationForm)


  return (
    <Div>
      <p>转账还款认领</p>
      <HomeForm></HomeForm>
      <Table scroll={{ x, y: 200 }} rowKey="applySerialNo" dataSource={records.map((item: any) => ({ ...item, key: item.applyserialNo }))} columns={columns} />
    </Div>
  );
}

export default Home
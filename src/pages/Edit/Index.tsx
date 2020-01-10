import React, { FC } from 'react'
import { Table, Form, Input, Icon, Button } from 'antd'
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
  const x = columns.reduce((pre, curr) => pre + curr.width, 0)
  console.log(err)

  const HomeForm = Form.create({ name: 'home-form' })((props: any) => {
    const { getFieldDecorator, validateFields } = props.form
    const submit = (e: any) => {
      e.preventDefault()
      validateFields((err: any, values: any) => {
        console.log(values)
      })
    }
    return (
      <Form onSubmit={submit}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    )
  })


  return (
    <Div>
      <p>转账还款认领</p>
      <HomeForm></HomeForm>
      <Table scroll={{ x, y: 200 }} rowKey="applySerialNo" dataSource={records.map((item: any) => ({ ...item, key: item.applyserialNo }))} columns={columns} />
    </Div>
  );
}

export default Home
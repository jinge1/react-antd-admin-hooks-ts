import React, { FC, useState } from 'react'
import { Table, Form, Input, Button, Row, Col } from 'antd'
import styled from '@emotion/styled'
import useFetch from '@/hooks/useFetch'
import queryClaimPaymentList from '@/model/queryClaimPaymentList'


// type MyProps = {
//   color: string,
//   width: number
// }

interface IObject {
  [propName: string]: any
}

const Div = styled.div`
  background: #fff;
`

// https://blog.csdn.net/qq_37674616/article/details/84372896
const Home: FC = () => {
  const [body, setBody] = useState({ "transCode": "", "currentPage": 1, "pageSize": 10, "applyserialNo": "", "serialNo": "", "customerName": "", "certId": "" })
  const { api, columns } = queryClaimPaymentList()
  const { err, res } = useFetch(api, body)
  const { records = [] } = res
  const x = columns.reduce((pre, curr) => pre + curr.width, 0)
  const colArr = [...columns, {
    "title": "操作管理",
    width: 150,
    "key": "action",
    // fixed: 'right',
    render: () => <span>详情</span>,
  }]
  console.log(columns)

  const HomeForm = Form.create({ name: 'home-form' })((props: { form: IObject }) => {
    const { form }: IObject = props
    const { getFieldDecorator, validateFields } = form
    const submit = (e: any) => {
      e.preventDefault()
      validateFields((err: any, values: any) => {
        setBody(values)
      })
    }
    const reset = () => {
      form.resetFields()
    }
    return (
      <Form onSubmit={submit}>
        <Row>
          <Col span={8}>
            <Form.Item>
              {getFieldDecorator('username')(
                <Input
                  placeholder="Username"
                />,
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item>
              {getFieldDecorator('password')(
                <Input
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={reset}>
              Clear
            </Button>
          </Col>
        </Row>
      </Form>
    )
  })


  return (
    <Div>
      <HomeForm></HomeForm>
      <Table scroll={{ x, y: 200 }} rowKey="applySerialNo" dataSource={records.map((item: any) => ({ ...item, key: item.applyserialNo }))} columns={colArr} />
    </Div>
  );
}

export default Home
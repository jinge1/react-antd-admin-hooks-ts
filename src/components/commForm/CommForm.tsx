import React, { FC, useEffect, useState, useReducer } from 'react'
import { Form, Input, Button, Row, Col, Select } from 'antd'
import { IInputItem } from '@/types/form'
// import useFetch from '@/hooks/useFetch'
import commFetch from '@/utils/commFetch'
import qryProdList from '@/model/qryProdList'

interface IObject {
  [propName: string]: any;
}

interface IAction{
  type: string;
  [propName: string]: any;
}

interface ISelect {
  [propName: string]: {
    name: string;
    body: IObject;
  }
}

interface IProps {
  list: IInputItem[];
  callback: (values: IObject) => void;
  name?: string;
  selectItems?: ISelect;
}

const { Option } = Select

const { api, format } = qryProdList()

const dataFetchReducer = (state: IObject, action: IAction) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        // list: action.list
      };
    default:
      throw state;
  }
}

const CommForm: FC<IProps> = (props) => {
  const { name = 'comm-form', callback, list, selectItems = {} } = props
  const [optionsRes, setOptionsRes] = useState({})
  const [state, dispatch] = useReducer(dataFetchReducer, {})
  // const { err: optionErr, res } = useFetch(api)
  // console.log(res)
  console.log(optionsRes)
  useEffect(() => {
    const getOptions = () => {
      let temp = {}
      Object.keys(selectItems).forEach(async (selectKey) => {
        const { body } = selectItems[selectKey]
        if (selectKey === 'productIdArray') {
          const result = await commFetch.toPost(api, body)
          temp = { ...temp, [selectKey]: format(result) }
        }
      })
      setOptionsRes(temp)
    }
    if (Object.keys(selectItems).length > 0) {
      getOptions()
    }
  }, [selectItems])

  const TempForm = Form.create({ name })((fProps: { form: IObject }) => {
    const { form }: IObject = fProps
    const { getFieldDecorator, validateFields } = form
    const submit = (e: any) => {
      e.preventDefault()
      validateFields((err: any, values: any) => {
        callback(values)
      })
    }
    const reset = () => {
      form.resetFields()
    }

    const ButtonRow = () => (
      <Row>
        <Col span={24}>
          <Button type="primary" htmlType="submit">
            搜索
        </Button>
          <Button style={{ marginLeft: 8 }} onClick={reset}>
            重置
        </Button>
          <Button style={{ marginLeft: 8 }}>
            展开
        </Button>
        </Col>
      </Row>
    )

    const getInput = (item: IInputItem) => {
      const { type, options = [] } = item
      if (type === 'input') {
        return <Input placeholder="请输入"></Input>
      }
      if (type === 'select') {
        return (
          <Select>
            {options.map(({ label, value }) => (
              <Option key={value} value={value}>{label}</Option>
            ))}
          </Select>
        )
      }
      return null
    }

    return (
      <Form onSubmit={submit}>
        <Row>
          {list.map((item) => (
            <Col span={4} key={item.name}>
              <Form.Item label={item.label}>
                {getFieldDecorator(item.name)(getInput(item))}
              </Form.Item>
            </Col>
          ))}
        </Row>
        <ButtonRow></ButtonRow>
      </Form>
    )
  })
  return (
    <TempForm></TempForm>
  )
}

export default CommForm
import React, { FC, useState, useEffect, useContext } from 'react'
import { Form, Input, Button, Row, Col, Select } from 'antd'
import { storeContext } from '@/components/Provider'
import { IInputItem } from '@/types/form'

interface IObject {
  [propName: string]: any;
}

interface IAction {
  type: string;
  [propName: string]: any;
}

interface ISelect {
  [propName: string]: {
    key: string;
    body: IObject;
  }
}

interface IProps {
  list: IInputItem[];
  callback: (values: IObject) => void;
  name?: string;
  selectItems?: ISelect;
}

interface IValues{
  [propName: string]: any
}

const { Option } = Select

const maxCols = 3

const CommForm: FC<IProps> = (props) => {
  const { state, asyncDispatch } = useContext(storeContext)
  const [showAll, setShowAll] = useState(false)
  const { name = 'comm-form', callback, list, selectItems = {} } = props
  const { options } = state
  useEffect(() => {
    const getOptions = () => {
      Object.keys(selectItems).forEach(async (selectKey) => {
        const { body, key } = selectItems[selectKey]
        if (selectKey === 'productIdArray') {
          asyncDispatch({ type: 'SET_PRODUCT_NAME', key, body })
        }
        if (selectKey === 'phaseNoArray') {
          asyncDispatch({ type: 'SET_FLOW_PHASE', key, body })
        }
      })
    }
    getOptions()
  }, [selectItems, asyncDispatch])

  const TempForm = Form.create({ name })((fProps: { form: IObject }) => {
    const { form }: IObject = fProps
    const { getFieldDecorator, validateFields } = form
    const submit = (e: any) => {
      e.preventDefault()
      validateFields((err: any, values: IValues) => {
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
          <Button style={{ marginLeft: 8 }} onClick={() => setShowAll(!showAll)}>
            展开
        </Button>
        </Col>
      </Row>
    )

    const getInput = (item: IInputItem) => {
      const { type, name } = item
      if (type === 'input') {
        return <Input placeholder="请输入"></Input>
      }
      if (type === 'select') {
        const key = selectItems[name] ? selectItems[name].key : ''
        const items = key && options[key] ? options[key] : []
        return (
          <Select mode="tags" maxTagCount={1}>
            {items.map(({ key, value }: any) => (
              <Option key={value} value={value}>{key}</Option>
            ))}
          </Select>
        )
      }
      return null
    }

    return (
      <Form onSubmit={submit} layout="inline" className="commForm">
        {list.filter((l, index) => showAll ? true : index < maxCols).map((item) => (
          <Form.Item label={item.label} key={item.name}>
            {getFieldDecorator(item.name, item.rules ? { rules: item.rules, initialValue: item.value || '' } : {})(getInput(item))}
          </Form.Item>
        ))}
        <ButtonRow></ButtonRow>
      </Form>
    )
  })
  return (
    <TempForm></TempForm>
  )
}

export default CommForm
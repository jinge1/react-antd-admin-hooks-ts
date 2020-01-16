import React, { FC, useState, useCallback } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import CommForm from '@/components/commForm/CommForm'
import useFetch from '@/hooks/useFetch'
import claimTrialPayment from '@/model/claimTrialPayment'


// type MyProps = {
//   color: string,
//   width: number
// }

const Div = styled.div`
  background: #fff;
`

interface IObject {
  [propName: string]: any
}

const getSearch = (search: string, name?: string) => {
  const arr = search.match(/([^?=&]+)=([^?=&]+)/g)
  let temp: IObject = {}
  if (arr) {
    temp = arr.reduce((pre, curr) => ({ ...pre, [curr.split('=')[0]]: curr.split('=')[1] }), {})
  }
  return name ? temp[name] || '' : temp
}


// https://blog.csdn.net/qq_37674616/article/details/84372896
const Edit: FC = () => {
  const [body, setBody] = useState({})
  // const [serialInfo, setSerialInfo] = useState({ serialNo: getSearch(useLocation().search, 'serialNo') })
  const { api, formList } = claimTrialPayment()
  // const { err, res } = useFetch(api, serialInfo)
  // console.log(err)
  // console.log(res)

  // const selectItems = {}

  // console.log(serialNo)
  return (
    <Div>
      <p>还款申请信息</p>
      <CommForm name="home-form" list={formList.map(item => ({ ...item, value: res[item.name] || item.value || '' }))} callback={(values: IObject) => setBody(values)}></CommForm>
    </Div >
  );
}

export default Edit
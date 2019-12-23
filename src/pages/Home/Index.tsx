import React, { FC } from 'react'
import { Steps, Icon } from 'antd'
import styled from '@emotion/styled'
import Level from './Level'
// import logo from '@/assets/logo.svg'
// import style from './some.module.css'
const { Step } = Steps


type MyProps = {
  color: string,
  width: number
}

const ATest = styled.div<MyProps>`
  width: ${(props: MyProps) => props.width}px;
  color: ${(props: MyProps) => props.color};
  text-align center;
  background-size: contain;
`


const HomeDemo: FC = () => {
  return (
    <div className="App">
      <Icon type="home" />
      <Steps current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
      {/* <img className="App-logo" src={logo} alt="" /> */}
      <Level />
      <ATest color="red" width={300}><p>666</p></ATest>
    </div>
  );
}

export default HomeDemo
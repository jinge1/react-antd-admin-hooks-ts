import React from 'react'
import { Steps, Icon } from 'antd'
// import logo from '@/assets/logo.svg'
import '@/index.css'
const { Step } = Steps

const HomeDemo: React.FC = () => {
  return (
    <div className="AppTest">
      <Icon type="home" />
      <Steps current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
      {/* <img src={logo} alt="" /> */}
    </div>
  );
}

export default HomeDemo
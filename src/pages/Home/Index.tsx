import React from 'react'
import { Steps, Icon } from 'antd'
const { Step } = Steps

const HomeDemo: React.FC = () => {
  return (
    <div className="App">
      <Icon type="home" />
      <Steps current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    </div>
  );
}

export default HomeDemo
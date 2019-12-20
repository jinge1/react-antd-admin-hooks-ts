import React from 'react'
import { Steps, Icon } from 'antd'
import styled from '@emotion/styled'
import Level from './Level'
import logo from '@/assets/logo.svg'
import style from './some.module.css'
const { Step } = Steps

// const Button = styled.button`
//   color: ${props =>
//     props.primary ? 'hotpink' : 'turquoise'};
// `

// const Container = styled.div`(props => ({
//   display: 'flex',
//   color: 'red',
//   flexDirection: props.title && 'title'
// }))
// `

const Container = styled.div`
color: ${props.title ? 'red' : 'orange'}
`

const HomeDemo: React.FC = () => {
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
      <Container title="321">
        666
        {/* <Button>This is a regular button.</Button>
        <Button primary>This is a primary button.</Button> */}
      </Container>
    </div>
  );
}

export default HomeDemo
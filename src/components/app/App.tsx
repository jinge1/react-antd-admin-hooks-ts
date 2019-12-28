import React, { FC, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import NavTree from '@/components/tree/Tree'
import Router from '@/components/router/Router'

import './App.css'

const fixedHeight = '60px'

const Body = styled.div`
  width:100%;
  display: flex;
  height: 100%;
`
const SideBar = styled.div`
  width:200px;
  background:#001E3B;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex:1;
  background: rgba(0,0,0,.02);
  display: flex;
  flex-direction: column;
`

const Logo = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  line-height: ${fixedHeight};
  height: ${fixedHeight};
`

const Nav = styled.div`
  flex: 1;
  background: orange;
  overflow-y:auto;
  ::-webkit-scrollbar{
    display:none;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${fixedHeight};
`

const Content = styled.div`
  flex: 1;
  background:gray;
  overflow-y:auto;
  ::-webkit-scrollbar{
    display:none;
  }
`

const HeaderRight = styled.div`
  display: flex;
`

const App: FC = () => {
  return (
    <Body>
      <SideBar>
        <Logo>company-logo</Logo>
        <Nav>
          <NavTree></NavTree>
        </Nav>
      </SideBar>
      <Main>
        <Header>
          <p>slide</p>
          <HeaderRight>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </HeaderRight>
        </Header>
        <Content>
          <Router></Router>
        </Content>
      </Main>
    </Body>
  )
}

export default App;

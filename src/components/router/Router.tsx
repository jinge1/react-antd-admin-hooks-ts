import React, { FC } from 'react'
import Home from '@/pages/Home/Index'
import Form from '@/pages/Form/Index'
import Fetch from '@/pages/Fetch/Index'
import { Switch, Route } from 'react-router-dom'

const Router: FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/form" component={Form}></Route>
      <Route path="/fetch" component={Fetch}></Route>
      <Route path="/list" component={Fetch}></Route>
    </Switch>
  )
}

export default Router

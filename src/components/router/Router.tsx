import React, { FC, lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
const Home = lazy(() => import('@/pages/Home/Index'))
const Form = lazy(() => import('@/pages/Form/Index'))
const Fetch = lazy(() => import('@/pages/Fetch/Index'))
const Edit = lazy(() => import('@/pages/Edit/Index'))

const Router: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/form" component={Form}></Route>
        <Route path="/fetch" component={Fetch}></Route>
        <Route path="/list" component={Fetch}></Route>
        <Route path="/edit" component={Edit}></Route>
      </Switch>
    </Suspense>
  )
}

export default Router

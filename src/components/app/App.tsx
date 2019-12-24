import React, { useEffect, useState } from 'react'
import useFetch from '@/hooks/useFetch'
// import Home from '@/pages/Home/Index'
// import Form from '@/pages/Form/Index'
// import Fetch from '@/pages/Fetch/Index'
// import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'


const App: React.FC = () => {
  const [body, setBody] = useState(1)
  let api = 'sso-portal/menu/getUserMenu?menuId='
  const { err, res } = useFetch(api, { user: 'someone' })
  const handleClick = () => {
    setBody(body + 1)
  }
  console.log(body)

  return err ? <p>err</p> : <p onClick={handleClick}>{body}---{JSON.stringify(res).substring(0, 30)}</p>

  // return (
  //   <BrowserRouter>
  //     <Route path='/' exact component={Home}></Route>
  //     <Route path='/form' exact component={Form}></Route>
  //     <Route path='/fetch' exact component={Fetch}></Route>
  //   </BrowserRouter>
  // );
}

export default App;

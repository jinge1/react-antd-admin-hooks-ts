import React from 'react';
import Home from '@/pages/Home/Index'
import Form from './pages/Form/Index'
import Fetch from './pages/Fetch/Index'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
// import 'antd/dist/antd.css'


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home}></Route>
      <Route path='/form' exact component={Form}></Route>
      <Route path='/fetch' exact component={Fetch}></Route>
    </BrowserRouter>
  );
}

export default App;

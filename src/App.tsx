import React from 'react';
import './App.css';
import Demo from './components/Demo'

const App: React.FC = () => {
  const msg = 'hello word!'
  return (
    <div className="App">
      <Demo msg={msg}></Demo>
    </div>
  );
}

export default App;

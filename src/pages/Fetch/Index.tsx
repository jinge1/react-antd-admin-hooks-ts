import React from 'react'

const FetchDemo: React.FC = () => {
  // document.cookie = 'token=abc1010'
  fetch('http://localhost:3000/api',{
    headers: {
      'Content-Type': 'application/json',
      'token': '123'
    },
    credentials: 'include'
  }).then(res=> {
    return res.json()
  }).then(res=> {
    console.log(res)
  })
  return (
    <div className="App">
      FetchDemo
    </div>
  );
}

export default FetchDemo
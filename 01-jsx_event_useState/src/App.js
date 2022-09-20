import React, { useEffect, useState } from 'react';

const App = () => {
  /*   
    useEffect(()=>{//생명주기, 화면에 만들어졌을때, 태어났을때
      document.querySelector('button').addEventListener('click',()=>{alert()})
    },[]) 
  */
  let [_n,_changeN] = useState(0)//_n=0
  const fnFoo = () =>{
    let n = _n
    n++
    _changeN(n)
  }
  return (
    <>
      <h1 className='h1'>리액트 첫수업</h1>
      <hr />
      <button onClick={fnFoo}>증가</button>
      <hr />
      <p>{_n}</p>
    </>
  );
};

export default App;
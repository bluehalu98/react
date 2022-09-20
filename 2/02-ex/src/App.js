import React, { useRef, useState } from 'react';
import CompResult from './comp/CompResult';

const App = () => {
  let [_result,_setResult] = useState(0)
  let refInput1 = useRef()
  let refInput2 = useRef()
  let refInput3 = useRef()
  const fnEx = ()=>{
    let n1 = parseInt(refInput1.current.value)
    let n2 = parseInt(refInput2.current.value)
    let n3 = parseInt(refInput3.current.value)
    if(n1+n2 === n3){
      let result = _result++
      _setResult(result)
    }
  }
  return (
    <>
      <input type="number" ref={refInput1}/>
      +
      <input type="number" ref={refInput2}/>
      =
      <input type="number" ref={refInput3}/>
      <hr />
      <button onClick={fnEx}>결과보기</button>
      <hr />
      <p>점수 : <CompResult _result={_result}/></p>
    </>
  );
};

export default App;
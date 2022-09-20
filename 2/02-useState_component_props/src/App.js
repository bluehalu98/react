import React, { useRef, useState } from 'react';
import CompN1 from './comp/CompN1';
import CompN2 from './comp/CompN2';
import CompScore from './comp/CompScore';

const App = () => {
  let [_n1, _changeN1] = useState(0)
  let [_n2, _changeN2] = useState(0)
  let [_score,_setscore] = useState(0)
  let refInput = useRef()
  const fnSetNumber = () =>{
    let n1 = Math.ceil(Math.random()*9)
    let n2 = Math.ceil(Math.random()*9)
    _changeN1(n1)//_n1의 값을 변경
    _changeN2(n2)//_n2의 값을 변경
  }
  const fnResult = () => {
    let anw = _n1 * _n2
    let inputN = parseInt(refInput.current.value)
    if(anw === inputN){
      let score = _score
      score++
      _setscore(score)
    }
  }
  return (
    <>
      <button onClick={fnSetNumber}>문제내기</button>
      <hr />
      <CompN1 _n1 = {_n1}/>
      {/* <span>{_n1}</span> */}
      *
      <CompN2 _n2 = {_n2} />
      {/* <span>{_n2}</span> */}
      =
      <input ref={refInput} type="number" />
      <hr />
      <button onClick={fnResult}>결과확인</button>
      <hr />
      <p>점수 : <CompScore _score = {_score} /></p>
    </>
  );
};

export default App;
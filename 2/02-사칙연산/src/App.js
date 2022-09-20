import React, { useRef, useState } from 'react';

const App = () => {
  const [_num1 , _setNum1] = useState('?') 
  const [_num2 , _setNum2] = useState('?') 
  const [_oper, _setOper] = useState('?')
  const [_point , _setpoint] = useState(0) 
  const arr = ['+','-','/','*']
  const fnSetQus = () => {
    let num1 = _num1
    let oper = _oper
    let num2 = _num2
    num1 = Math.ceil(Math.random()*9)
    num2 = Math.ceil(Math.random()*9)
    oper = arr[Math.floor(Math.random()*4)]
    _setNum1(num1)
    _setNum2(num2)
    _setOper(oper)
  }
  let inpNum = useRef()
  let result
  let point=_point
  if(_oper==='+'){
    result=_num1+_num2
  }
  if(_oper==='-'){
    result=_num1-_num2
  }
  if(_oper==='/'){
    result=_num1/_num2
  }
  if(_oper==='*'){
    result=_num1*_num2
  }
  const fnResult = () => {
    if(result===parseInt(inpNum.current.value)){point++}
    _setpoint(point)
  }
  return (
    <>
      <button onClick={fnSetQus}>문제내기</button>
      <hr />
      <span>{_num1}</span>
      <span>{_oper}</span>
      <span>{_num2}</span>
      =
      <input type="number" ref={inpNum} />
      <hr />
      <button onClick={fnResult}>결과보기</button>
      <br />
      <span>점수 : {_point}</span>
    </>
  );
};

export default App;
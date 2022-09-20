import React, { useRef } from 'react';

const CompQ = (props) => {
  const {_num1, _num2, _setNum1, _setNum2, _stage, _setStage, _result, _setResult, _setPoint,_point} = props
  const refInp1 = useRef()
  const fnQ = () => {
    _setNum1(Math.ceil(Math.random()*9))
    _setNum2(Math.ceil(Math.random()*9))
  }
  let point = _point
  const fnResult = () => {
    _setStage('false')
    if(_num1*_num2===parseInt(refInp1.current.value)){
      _setResult('정답입니다!!')
      _setPoint(point++)
    }else{
      _setResult('오답입니다!!')
      _setPoint(point)
    }
    console.log(point);
  }
  return (
    <>
      <button onClick={fnQ}>문제제출</button>
      <hr />
      <span>{_num1}</span>
      *
      <span>{_num2}</span>
      =
      <input ref={refInp1} type="number" size='2' defaultValue='0'/>
      <hr />
      <button onClick={fnResult}>결과보기</button>
    </>
  );
};

export default CompQ;
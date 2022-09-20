import React from 'react';

const CompStart = (props) => {
  const {_setStage,_setNum1,_setNum2} = props
  const fnStage = (e) => {
    _setNum1(Math.ceil(Math.random()*9))
    _setNum2(Math.ceil(Math.random()*9))
    _setStage(e.target.getAttribute('data-stage'))
  }
  return (
    <>
      <p>사칙연산 문제 풀기</p>
      <hr />
      <button onClick={fnStage} data-stage='plus'>더하기</button>
      <br />
      <button onClick={fnStage} data-stage='minus'>빼기</button>
      <br />
      <button onClick={fnStage} data-stage='divide'>나누기</button>
      <br />
      <button onClick={fnStage} data-stage='multiple'>곱하기</button>
    </>
  );
};

export default CompStart;
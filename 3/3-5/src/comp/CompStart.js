import React from 'react';

const CompStart = (props) => {
  const {_setStage,_setNum1,_setNum2} = props
  const fnChangeStg = (e) => {
    _setStage(e.target.getAttribute('data-stage'))
    _setNum1(Math.ceil(Math.random()*9))
    _setNum2(Math.ceil(Math.random()*9))
  }
  return (
    <>
      <p>문제종류를 선택하세요</p>
      <button onClick={fnChangeStg} data-stage='compPlus'>더하기</button>
      <button onClick={fnChangeStg} data-stage='compMinus'>빼기</button>
    </>
  );
};

export default CompStart;
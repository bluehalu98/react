import React from 'react';

const CompResultBtn = (props) => {
  const {_stage,_setStage,_num1, _num2, _setResult,_point, _setPoint, refInp} = props
  const fnResult = () => {
    let answer 
    if(_stage==='compPlus'){
      answer = _num1+_num2
    }else if(_stage==='compMinus'){
      answer = _num1-_num2
    }
    let point = _point
    if(answer === parseInt(refInp.current.value)){
      point++
      _setPoint(point)
      _setResult('정답입니다!!')
    }else{
      point--
      _setPoint(point)
      _setResult('오답입니다!!')      
    }
    _setStage('compResult')
  }
  return (
    <>
      <button onClick={fnResult}>결과보기</button>
    </>
  );
};

export default CompResultBtn;
import React from 'react';

const CompResultB = ({_stage,_setStage,_num1,_num2,refInp, _setResult, _point, _setPoint}) => {
  const fnStage = ()=> {
    let answer
    if(_stage==='plus'){
      answer = _num1 + _num2
    }else if(_stage==='minus'){
      answer = _num1 - _num2
    }else if(_stage==='divide'){
      answer = Math.ceil(_num1 / _num2)
    }else{
      answer = _num1 * _num2
    }
    let point = _point
    if(answer===parseInt(refInp.current.value)){
      point++
      _setPoint(point)
      _setResult('정답입니다!!!')
    }else{
      point--
      _setPoint(point)
      _setResult('오답입니다!!!')
    }
    _setStage('result')
  }
  return (
    <div>
      <button onClick={fnStage}>결과보기</button>
    </div>
  );
};

export default CompResultB;
import React, { useContext } from 'react';
import { AppContext } from '../App';


const CompResultBtn = () => {
  const {_stage, _setStage, _num1, _num2,_setResult,_point, _setPoint, refInput} = useContext(AppContext)
  const fnResult = ()=> {
    let calcNum
    if(_stage==='sum'){
      calcNum = _num1 + _num2
    }else if(_stage==='sub'){
      calcNum = _num1 - _num2
    }else if(_stage==='multi'){
      calcNum = _num1 * _num2
    }else if(_stage==='divide'){
      calcNum = _num1 / _num2
    }
    let point = _point
    let result = (calcNum === parseInt(refInput.current.value))
    if(calcNum === parseInt(refInput.current.value)){
      point++
      result = '정답입니다!!!'
    }else{
      point--
      result='오답입니다!!!'
    }
    _setResult(result)
    _setPoint(point)
    _setStage('result')
  }
  return (
    <button onClick={fnResult}>
      결과보기
    </button>
  );
};

export default CompResultBtn;
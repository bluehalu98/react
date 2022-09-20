import React, { useState } from 'react';
import CompD from './comp/CompD';
import CompM from './comp/CompM';
import CompMul from './comp/CompMul';
import CompP from './comp/CompP';
import CompResult from './comp/CompResult';
import CompStart from './comp/CompStart';

const App = () => {
  const [_stage,_setStage] = useState('start')
  const [_num1,_setNum1] = useState(0)
  const [_num2,_setNum2] = useState(0)
  const [_result,_setResult] = useState('1')
  const [_point,_setPoint] = useState(0)
  return (
    <>
      {(_stage==='start')&&
      <CompStart
        _setStage={_setStage}
        _setNum1={_setNum1}
        _setNum2={_setNum2}
      />}
      {(_stage==='result')&&
      <CompResult
        _setStage={_setStage}
        _result={_result}
        _point={_point}
      />}
      {(_stage==='plus')&&
      <CompP
        _stage={_stage}
        _setStage={_setStage}
        _num1={_num1}
        _num2={_num2}
        _setResult={_setResult}
        _point={_point}
        _setPoint={_setPoint}
      />}
      {(_stage==='minus')&&
      <CompM
        _stage={_stage}
        _setStage={_setStage}
        _num1={_num1}
        _num2={_num2}
        _setResult={_setResult}
        _point={_point}
        _setPoint={_setPoint}
      />}
      {(_stage==='divide')&&
      <CompD
        _stage={_stage}
        _setStage={_setStage}
        _num1={_num1}
        _num2={_num2}
        _setResult={_setResult}
        _point={_point}
        _setPoint={_setPoint}
      />}
      {(_stage==='multiple')&&
      <CompMul
        _stage={_stage}
        _setStage={_setStage}
        _num1={_num1}
        _num2={_num2}
        _setResult={_setResult}
        _point={_point}
        _setPoint={_setPoint}
      />}
    </>
  );
};

export default App;
import React, { useState } from 'react';
import CompMinus from './comp/CompMinus';
import CompPlus from './comp/CompPlus';
import CompResult from './comp/CompResult';
import CompStart from './comp/CompStart';

const App = () => {
  const [_stage,_setStage] = useState('compStart')
  const [_num1,_setNum1] = useState(0)
  const [_num2,_setNum2] = useState(0)
  const [_result,_setResult] = useState('')
  const [_point,_setPoint] = useState(0)
  return (
    <>
      {(_stage==='compStart')&&
      <CompStart
        _setStage={_setStage}
        _setNum1={_setNum1}
        _setNum2={_setNum2}
      />}
      {(_stage==='compPlus')&&
      <CompPlus
        _stage={_stage}
        _setStage={_setStage}
        _num1={_num1}
        _num2={_num2}
        _result={_result}
        _setResult={_setResult}
        _point={_point}
        _setPoint={_setPoint}
      />}
      {(_stage==='compMinus')&&
      <CompMinus
      _stage={_stage}
        _setStage={_setStage}
        _num1={_num1}
        _num2={_num2}
        _result={_result}
        _setResult={_setResult}
        _point={_point}
        _setPoint={_setPoint}
      />}
      {(_stage==='compResult')&&
      <CompResult
        _setStage={_setStage}
        _result={_result}
        _point={_point}
      />}
    </>
  );
};

export default App;
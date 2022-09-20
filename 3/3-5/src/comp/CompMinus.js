import React, { useRef } from 'react';
import CompResultBtn from './CompResultBtn';

const CompMinus = (props) => {
  const {_stage,_setStage,_num1, _num2, _setResult,_point, _setPoint} = props
  const refInp=useRef()
  return (
    <>
      {_num1} - {_num2} = <input ref={refInp} type="number"/>
      <hr />
      <CompResultBtn
        _stage={_stage}
        _setStage={_setStage}
        _num1={_num1}
        _num2={_num2}
        _setResult={_setResult}
        _point={_point}
        _setPoint={_setPoint}
        refInp={refInp}
      />
      {/* <button onClick={fnResult}>결과화면</button> */}
    </>
  );
};

export default CompMinus;
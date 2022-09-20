import React, { useRef } from 'react';
import CompResultB from './CompResultB';

const CompM = (props) => {
  const {_stage, _setStage, _num1, _num2, _setResult, _point, _setPoint} = props
  const refInp = useRef()
  return (
    <>
      {_num1} - {_num2} = <input ref={refInp} type="number" />
      <br />
      <CompResultB
        _stage={_stage}
        _setStage={_setStage}
        _num1={_num1}
        _num2={_num2}
        refInp={refInp}
        _setResult={_setResult}
        _point={_point}
        _setPoint={_setPoint}
      />
    </>
  );
};

export default CompM;
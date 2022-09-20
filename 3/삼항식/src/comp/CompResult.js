import React from 'react';

const CompResult = (props) => {
  const {_stage, _setStage, _result, _point, _setPoint, _setResult} = props
  const fnReset = () => {
    _setStage('true')
  }
  return (
    <div>
      {_result}
      <br />
      <span>총 {_point}점입니다!!</span>      
      <hr />
      <button onClick={fnReset}>다시하기</button>
    </div>
  );
};

export default CompResult;
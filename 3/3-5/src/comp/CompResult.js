import React from 'react';

const CompResult = (props) => {
  const {_setStage,_point,_result} = props
  const fnStart = () => {
    _setStage('compStart')
  }
  return (
    <>
      {_result} <br />
      현재 총 {_point}점입니다! <br />
      <button onClick={fnStart}>처음화면으로</button>
    </>
  );
};

export default CompResult;
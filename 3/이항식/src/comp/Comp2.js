import React from 'react';

const Comp2 = ({_setShow1, _setShow2}) => {
  const fnC1 = () => {
    _setShow2(false)
    _setShow1(true)
  }
  return (
    <div>
      comp2입니다
      <button onClick={fnC1}>comp1출력</button>
    </div>
  );
};

export default Comp2;
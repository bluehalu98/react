import React from 'react';

const Comp1 = ({_setShow2, _setShow1}) => {
  const fnC2 = () => {
    _setShow2(true)
    _setShow1(false)
  }
  return (
    <div>
      comp1입니다
      <button onClick={fnC2}>comp2출력</button>
    </div>
  );
};

export default Comp1;
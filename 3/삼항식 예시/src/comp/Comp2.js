import React from 'react';

const Comp2 = (props) => {
  const {_setShow, _cnt, _setCnt} =props
  const fnC1 = ()=> {
    _setShow(true)
    let cnt = _cnt
    _setCnt(cnt++)
    console.log(_cnt);
  }
  return (
    <div>
      comp2입니다
      <button onClick={fnC1}>comp1보기</button>
    </div>
  );
};

export default Comp2;
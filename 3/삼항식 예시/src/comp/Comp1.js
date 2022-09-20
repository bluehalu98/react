import React from 'react';

const Comp1 = (props) => {
  const {_setShow, _cnt, _setCnt} =props
  const fnC2 = ()=> {
    _setShow(false)
    let cnt = _cnt
    _setCnt(cnt++)
    console.log(_cnt);
  }
  return (
    <div>
      comp1입니다
      <button onClick={fnC2}>comp2보기</button>
    </div>
  );
};

export default Comp1;
import React, { useEffect } from 'react';

const CompTitle = () => {
  useEffect(()=>{
    console.log('타이틀');
  })
  return (
    <h1>
      <img src={`${process.env.PUBLIC_URL}/img/title.png`} alt="" />
    </h1>
  );
};

export default React.memo(CompTitle);
//사용되지 않는 state값이 변경될때 상관없는 컴포넌트가 리렌더링 되는것을 막아줌
//하지만 react.memo도 메모리점유율이 높아서 자주 사용되거나 많은값을 사용하는 컴포넌트에는 달지않는것을 권장
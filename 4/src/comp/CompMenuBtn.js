import React, { useContext } from 'react';
import { AppContext } from '../App';

const CompMenuBtn = () => {
  let {_setStage} = useContext(AppContext)
  return (
    <>
      <button onClick={()=>{_setStage('menu')}}>메뉴화면으로</button>
    </>
  );
};

export default CompMenuBtn;
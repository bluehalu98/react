import React, { useContext } from 'react';
import { AppContext } from '../App';
import CompLi from './CompLi';

const CompList = () => {
  const {_setStage,_listArr} = useContext(AppContext)
  const fnSetStage = ()=> {
    _setStage('add')
  }
  return (
    <>
      <h2>명단출력화면</h2>
      <ul>
        {
          _listArr.map(v=><CompLi key={v.id} info={v}/>)
        }
        
      </ul>
      <hr />
      <button onClick={fnSetStage}>명단추가하기</button>
    </>
  );
};

export default CompList;
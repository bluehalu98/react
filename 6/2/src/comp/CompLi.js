import React, { useContext } from 'react';
import { AppContext } from '../App';

const CompLi = ({info}) => {
  const {_listArr,_setListArr} = useContext(AppContext)
  const fnDel = () => {
    //아이디가 동일하지 않은 객체들만 남긴다
    let arr = _listArr.filter(v=>v.id!==info.id)
    _setListArr(arr)
  }
  return (
    <li>
      {info.name}&nbsp;
      <button onClick={fnDel}>삭제</button>
    </li>
  );
};

export default CompLi;
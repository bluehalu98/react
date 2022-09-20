import React, { useContext, useRef } from 'react';
import { AppContext } from '../App';

const CompAdd = () => {
  const {_setStage,_listArr,_setListArr} = useContext(AppContext)
  const refName = useRef()
  const refAge = useRef()
  const refGender = useRef()

  const fnAddList = () => {
    /* 
      사람정보를 객체로 만든다 
      _listArr를 deep copy 한다
      _listArr를 바꾼다
    */
    let id = Date.now()//타임스탬프, key값을 저장할때 주로 이방법을 사용함 (천분의 일초)
    let name = refName.current.value
    let age = parseInt(refAge.current.value)
    let gender = refGender.current.value
    //id => id : id,
    //name => name : name,
    //age => age : age,
    //gender => gender : gender
    let obj = {id, name, age, gender}
    let arr = [..._listArr]
    arr.push(obj)
    _setListArr(arr)
    _setStage('list')
  }
  return (
    <>
      이름 : <input ref={refName} type="text" /> <br />
      나이 : <input ref={refAge} type="text" /> <br />
      성별 : <input ref={refGender} type="text" /> <br />
      <hr />
      <button onClick={fnAddList}>저장하기</button>
    </>
  );
};

export default CompAdd;
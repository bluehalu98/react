import React, { useContext } from 'react';
import { AppContext } from '../App';

const CompBtn = ({btnInfo}) => {
  const {_str,_setStr,_setShowE,_setShowS} = useContext(AppContext)
  let str = _str
  const fn = () => {
    if(btnInfo.type==='str'){
      if(str.length>30){
        _setShowS(true)
      }else{
        str += btnInfo.char
        _setStr(str)
      }
    }else if(btnInfo.type==='del'){
      str = str.slice(0,-1) // -1은 맨뒤, 0부터 맨뒤에꺼 한개만 없앤다
      _setStr(str)
    }else if(btnInfo.type==='clear'){
      str = ''
      _setStr(str)
    }else{
      try{//예외처리문법
        const fnNew = new Function(`return ${str}`)
        str = fnNew()//str를 계산해서 반환함
        str = String(str)
      }catch{
        _setShowE(true)
      }
    }
    _setStr(str)
  }
  return (
    <button onClick={fn}>
      <img src={`${process.env.PUBLIC_URL}/img/${btnInfo.src}.png`} 
      alt="" 
      draggable='false'
      />
    </button>
  );
};

export default CompBtn;
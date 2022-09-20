import React, { useContext } from 'react';
import { AppContext } from '../App';
import { btnArr } from '../store/store';

const CompOutput = () => {
  const {_str} = useContext(AppContext)
  let index = btnArr.map(v=>v.char)
  return (
    <div className='output-container'>
      <img className='bg-output' src={`${process.env.PUBLIC_URL}/img/output.png`} alt="" />
      <p className='output'>
        {
          _str.split('').map((v,i)=>{
            let src = index.indexOf(v)
            src = btnArr[src].char
            /* let src = imgArr[charArr.indexOf(v)] */
            return <img key={i} src={`${process.env.PUBLIC_URL}/img/${src}.png`} />
          })
        }
      </p>
    </div>
  );
};

export default CompOutput;  
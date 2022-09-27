import React from 'react';
import { contactArr } from '../../store/data';

const CompContactInp = () => {
  return (
    <>
      {
        contactArr.map((v,i)=>{
          return(
            <div key={i}>
              <label htmlFor={`${v.id}`}>{v.text}</label>
              <input id={`${v.id}`} type={`${v.type}`} />
            </div>
          )
        })
      }
    </>
  );
};

export default CompContactInp;
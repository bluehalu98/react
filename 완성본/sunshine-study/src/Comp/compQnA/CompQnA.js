import React from 'react';
import { qnaArr } from '../../store/data';

const CompQnA = () => {
  return (
    <>    
      <h2 className='sub-title'>자주 물으시는 질문</h2>
      <p className='sub-summary'>
        <span>
          <em>고객님들께서 자주 물으시는 질문들입니다.</em>
          <b>질문에 대한 궁금증을 상세하게 해결해드립니다.</b>
        </span>
      </p>
      <section className='section-qna'>
        {
          qnaArr.map((v,i)=>{
            return(
              <details key={i}>
                <summary>{v.q}</summary>
                <p>{v.a}</p>
              </details>  
            )
          })
        }
      </section>
    </>
  );
};

export default CompQnA;
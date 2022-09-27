import React, { useEffect } from 'react';
import CompVisual from './CompVisual';

const CompAbout = () => {
  useEffect(()=>{
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/js/sub-about.js`;
    document.body.appendChild(script); 
    return(()=>{
      script.remove()
    })
  },[])
  return (
    <>
      <h2 className='sub-title'>인사말</h2>
      <p className='sub-summary'>
        <span>
          <em>
            정보화 시대에 빠른 정보를 원하는 우리들은 인터넷은 <br />
            하나의 거대한 생활 공간이 되었습니다.
          </em>
          <b>
            고객들은 인터넷에서 정보를 찾고 지식을 얻으며 합리적인 소비를 <br />
            할 수 있게 되었고 기업들은 홈페이지를 이용하여 효율적인 마케팅을 할 수 있게 되었습니다.
          </b>
        </span>
      </p>
      <section className="section-about">
        <CompVisual/>
        <p>
          그만큼 홈페이지는 <b>기업활동의 중요한 요소</b>가 되었고 매출과 <br />
          <b>이미지 향상의 가장 영향력</b>이있는 매체가 되었습니다.
        </p>
        <p>
          홈페이지의 중요성을 잘 아는 선샤인은 고객의 성공적인 홈페이지 제작을 위하여 <br />
          진정한 동반자로서 함께 하고 싶습니다.
        </p>
        <p>
          선샤인은 기업홍보형, 쇼핑몰, 웹프로그래밍, 웹솔루션, 전자카달로그, 이미지촬영편집, 웹프로모션전문 에이전시로써 <br />
          고객님의 요구에 기획부터 홈페이지에 필요한 이미지 촬영, 전자카다로그 제작, 포탈싸이트 등록, 키워드광고, <br />
          홈페이지 제작과 활용에 필요한 모든 서비스를 제공하고 있습니다.
        </p>
        <p>감사합니다</p>
      </section>
    </>
  );
};

export default CompAbout;
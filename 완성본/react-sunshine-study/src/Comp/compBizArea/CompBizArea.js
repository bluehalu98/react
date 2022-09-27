import React from 'react';

const CompBizArea = () => {
  return (
    <>
      <h2 className='sub-title'>사업분야</h2>
      <p className='sub-summary'>
        <span>
          <em>
            회사만의 특화되고 세분화된 사업영역을 바탕으로 <br />
            최고의 비즈니스를 제안합니다.
            </em>
          <b>
            고객님의 요구에 기획부터 홈페이지에 필요한 이미지 촬영, 전자카다로그 제작, 포탈싸이트 등록, 키워드광고, <br />
            홈페이지 제작과 활용에 필요한 모든 서비스를 제공하고 있습니다.
          </b>
        </span>
      </p>
      <section className="section-biz-area">
        <figure>
          <div>
            <img src={`${process.env.PUBLIC_URL}/img/sub2/business-04.jpg`} alt="" />
          </div>
        </figure>
      </section>
    </>
  );
};

export default CompBizArea;
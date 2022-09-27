import React, { useEffect } from 'react';

const CompBizIntro = () => {
  useEffect(()=>{
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/js/sub-biz-intro.js`;
    document.body.appendChild(script); 
    return(()=>{
      script.remove()
    })
  },[])
  return (
    <>
      <h2 className='sub-title'>사업소개</h2>
      <p className='sub-summary'>
        <span>
          <em>선샤인은 감각이 있습니다.</em>
          <b>신기술과 젊은 감각을 바탕으로 탄탄한 기술적 기반이 되었습니다.</b>
        </span>
      </p>
      <section className="section-biz-intro">
        <figure>
          <figcaption>
            <h3>열정</h3>
            <p>
              (주)선샤인은 젊은 열정과 패기로 불가능을 가능으로 도전합니다 <br />
              고객들은 인터넷에서 정보를 찾고 지식을 얻으며 합리적인 <br />
              <br />
              소비를 할 수 있게 되었고 기업들은 홈페이지를 이용하여 <br />
              효울적인 마케팅을 할 수 있게 되었습니다.
            </p>
          </figcaption>
          <div>
            <img src={`${process.env.PUBLIC_URL}/img/sub2/business-01.jpg`} alt="" />
          </div>
        </figure>
        <figure>
          <figcaption>
            <h3>열정</h3>
            <p>
              (주)선샤인은 젊은 열정과 패기로 불가능을 가능으로 도전합니다 <br />
              고객들은 인터넷에서 정보를 찾고 지식을 얻으며 합리적인 <br />
              <br />
              소비를 할 수 있게 되었고 기업들은 홈페이지를 이용하여 <br />
              효울적인 마케팅을 할 수 있게 되었습니다.
            </p>
          </figcaption>
          <div>
            <img src={`${process.env.PUBLIC_URL}/img/sub2/business-02.jpg`} alt="" />
          </div>
        </figure>
        <figure>
          <figcaption>
            <h3>열정</h3>
            <p>
              (주)선샤인은 젊은 열정과 패기로 불가능을 가능으로 도전합니다 <br />
              고객들은 인터넷에서 정보를 찾고 지식을 얻으며 합리적인 <br />
              <br />
              소비를 할 수 있게 되었고 기업들은 홈페이지를 이용하여 <br />
              효울적인 마케팅을 할 수 있게 되었습니다.
            </p>
          </figcaption>
          <div>
            <img src={`${process.env.PUBLIC_URL}/img/sub2/business-03.jpg`} alt="" />
          </div>
        </figure>
      </section>
    </>
  );
};

export default CompBizIntro;
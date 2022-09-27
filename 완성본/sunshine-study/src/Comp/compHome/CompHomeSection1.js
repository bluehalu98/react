import React from 'react';
import { Link } from 'react-router-dom';


const CompHomeSection1 = () => {
  return (
    <section className='home-section-1'>
      <ul>
        <li>
          <figure>
            <Link to='/biz/intro'>
              <img src={`${process.env.PUBLIC_URL}/img/home/banner01.jpg`} alt="" />
            </Link>
            <figcaption>
              <h3>business</h3>
              <p>
                회사만의 특화되고 세분화된 사업영역으로 <br /> 
                최고의 비지니스를 제안합니다.
              </p>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <Link to='/product/gallery'>
              <img src={`${process.env.PUBLIC_URL}/img/home/banner02.jpg`} alt="" />
            </Link>
            <figcaption>
              <h3>product</h3>
              <p>
                최고의 기술력과 최상의 품질로 <br />
                보답하여 드리겠습니다.
              </p>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <Link to='/online/contact'>
              <img src={`${process.env.PUBLIC_URL}/img/home/banner03.jpg`} alt="" />
            </Link>
            <figcaption>
              <h3>online</h3>
              <p>
                온라인으로 빠르고 효율적인
                상담을 받으세요.
              </p>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <Link to='/company/location'>
              <img src={`${process.env.PUBLIC_URL}/img/home/banner04.jpg`} alt="" />
            </Link>
            <figcaption>
              <h3>location</h3>
              <p>
                당사로 찾아오시는 길을 상세히 <br />
                안내해 드립니다.
              </p>
            </figcaption>
          </figure>
        </li>
      </ul>
    </section>
  );
};

export default CompHomeSection1;
import React from 'react';
import { Link } from 'react-router-dom';
import { galleryArr, noticeArr } from '../../store/data';

const CompHomeSection2 = () => {
  let latestNoticeArr = [...noticeArr]
  latestNoticeArr.splice(5)//인덱스5부터 다 지운다
  let latestGalleryArr = [...galleryArr]
  latestGalleryArr.splice(3)
  return (
    <section className='home-section-2'>
      <section className='latest-notice'>
        <Link className='more' to='/community/notice'>more +</Link>
        <h3><i className="fa-solid fa-bell"></i>notice</h3>
          <ul>
            {
              latestNoticeArr.map((v,i)=>{
                return(
                  <li key={i}>
                    <a href="#">{v.title}</a>
                    <time>{v.date}</time>
                  </li>
                )
              })
            }
          </ul>
      </section>
      <section className='latest-gallery'>
        <Link className='more' to='/product/gallery'>more +</Link>
        <h3><i className="fa-regular fa-images"></i>gallery</h3>
          <ul>
            {
              latestGalleryArr.map((v,i)=>{
                return(
                  <li key={i}>
                    <a href="#">
                      <img src={`${process.env.PUBLIC_URL}${v.src}`} alt="" />
                      <h4>{v.title}</h4>
                    </a>
                  </li>
                )
              })
            }
          </ul>
      </section>
      <section className='home-customer'>
        <Link className='more' to='/online/contact'>more +</Link>
        <h3><i className="fa-solid fa-phone"></i>customer</h3>
        <p>
          문의해주시면 친절히
          상담해드립니다. 
        </p>
        <a href="tel:0">070-7155-1979</a>
        <p>
          Am. 09:00 ~ Pm. 06:00 <br />
          E-mail : gijung23@nate.com
        </p>
      </section>
    </section>
  );
};

export default CompHomeSection2;
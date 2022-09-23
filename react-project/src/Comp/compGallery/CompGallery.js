import React from 'react';
import { useEffect } from 'react';
import { galleryArr } from '../../store/data';

const CompGallery = () => {
  useEffect(()=>{
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/js/sub-gallery.js`;
    document.body.appendChild(script); 
  },[])
  return (
    <>
      <h2 className='sub-title'>갤러리</h2>
      <p className='sub-summary'>
        <span>
          <em>상품 갤러리입니다</em>
          <b>선샤인의 다양한 제작물을 살펴보실 수 있습니다</b>
        </span>
      </p>
    <section className='section-gallery'>
      <ul>
        {
          galleryArr.map((v,i)=>{
            return(
              <li key={i}>
                <div>
                  <figure>
                    <img src={`${process.env.PUBLIC_URL}${v.src}`} alt="" />
                  </figure>
                  <a href="">
                    <h3>{v.title}</h3>
                  </a>
                </div>
              </li>
            )
          })
        }
      </ul>
      <form className='board-search' action="">
        <select name="" id="">
          <option value="">제목</option>
          <option value="">작성자</option>
          <option value="">내용</option>
        </select>
        <input type="text" />
        <button>검색</button> 
      </form>
    </section>
    </>
  );
};

export default CompGallery;
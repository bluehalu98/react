import React from 'react';
import { Link } from 'react-router-dom';

const CompHomeSection3 = () => {
  return (
    <section className='home-section-3'>
      <div>
        <h2>CONTACT US</h2>
        <address>
          <p>부산광역시 해운대구 좌동 113-111 지오프라자 2층 710-2</p>
          <p>TEL 070-7155-1979</p>
          <p>FAX 02-2139-1142</p>
        </address>
        <Link to='/online/contact'>온라인문의</Link>
      </div>
    </section>
  );
};

export default CompHomeSection3;
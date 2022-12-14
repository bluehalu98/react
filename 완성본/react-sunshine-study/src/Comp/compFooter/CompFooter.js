import React from 'react';
import { Link } from 'react-router-dom';

const CompFooter = () => {
  return (
    <footer>
      <div>
        <nav>
          <Link to='/company/about'>회사소개</Link>
          <Link to='/biz/intro'>사업소개</Link>
          <Link to='/online/contact'>온라인상담</Link>
          <Link to='/product/gallery'>갤러리</Link>
          <Link to='/community/notice'>공지사항</Link>
        </nav>
        <address>
          <i>주소 : 부산광역시 해운대구 좌동 273-10</i>
          <i>상호 : 디자인선샤인</i>
          <i>사업자등록번호 : 123-456-7890</i>
          <i>Tel : 070-7155-1979 </i>
          <i>Fax : 02-2139-1142 / </i>
          <i>E-mail : gijung23@nate.com</i>
        </address>
        <p>Copyright ⓒ Sunsine.com All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default CompFooter;
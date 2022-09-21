import React from 'react';
import { NavLink } from 'react-router-dom';


const CompMenuCommunity = () => {
  return (
    <li>
      <a href="#">커뮤니티</a>
      <ul>
        <li><NavLink to='/community/notice'>공지사항</NavLink></li>
        <li><NavLink to='/community/QnA'>질문답변</NavLink></li>
        <li><NavLink to='/community/board'>자유게시판</NavLink></li>
      </ul>
    </li>
  );
};

export default CompMenuCommunity;
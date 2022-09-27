import React from 'react';
import { NavLink } from 'react-router-dom';


const CompMenuOnline = () => {
  return (
    <li>
      <a href="#">온라인문의</a>
      <ul>
        <li><NavLink to='/online/contact'>온라인문의</NavLink></li>
      </ul>
    </li>
  );
};

export default CompMenuOnline;
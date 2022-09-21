import React from 'react';
import { NavLink } from 'react-router-dom';


const CompMenuPrd = () => {
  return (
    <li>
      <a href="#">갤러리</a>
      <ul>
        <li><NavLink to='/product/gallery'>갤러리</NavLink></li>
      </ul>
    </li>
  );
};

export default CompMenuPrd;
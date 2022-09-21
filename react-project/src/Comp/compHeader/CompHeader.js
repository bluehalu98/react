import React, { useContext } from 'react';
import { AppContext } from '../../App';
import CompMenu from '../compMenu/CompMenu';
import CompMenuMember from '../compMenu/CompMenuMember';


const CompHeader = () => {
  const {_stage} = useContext(AppContext)
  return (
    <>
      <header>
        <div className='header-top'>
          <CompMenuMember/>
        </div>{/* header top */}
        <div className="header-bottom">  
          <h1>
            <span className="hidden">리액트프로젝트</span>
            <a href={process.env.PUBLIC_URL}>
              <img src={`${process.env.PUBLIC_URL}/img/icon/logo.png`} alt="" />
            </a>
          </h1>
          {(_stage==='lg')&&
            <nav className='gnb gnb-lg'>
              <CompMenu/>
            </nav>
          }
          {(_stage==='sm')&&
            <button className='mbtn'>
              <i className="fa-solid fa-xmark"></i>
              <i className="fa-solid fa-bars"></i>
            </button>
          }
        </div>{/* header bottom */}
      </header>
      {(_stage==='sm')&&
        <nav className='gnb gnb-sm'>
          <CompMenu/>
        </nav>
      }
    </>
  );
};

export default CompHeader;
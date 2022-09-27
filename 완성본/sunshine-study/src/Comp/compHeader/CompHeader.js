import React, { useContext } from 'react';
import { AppContext } from '../../App';
import CompMenuMember from '../compMenu/CompMenuMember';
import CompGnbLg from './CompGnbLg';
import CompGnbSm from './CompGnbSm';
import CompMbtn from './CompMbtn';
import { Link } from 'react-router-dom';

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
            <Link to='/'>
              <img src={`${process.env.PUBLIC_URL}/img/icon/logo.png`} alt="" />
            </Link>
          </h1>
          {(_stage==='lg')&&<CompGnbLg/>}
          {(_stage==='sm')&&<CompGnbSm/>}
          {(_stage==='sm')&&<CompMbtn/>}
        </div>{/* header bottom */}
      </header>

    </>
  );
};

export default CompHeader;
import React, { useContext } from 'react';
import { AppContext } from '../App';
import CompDailyLi from './CompDailyLi';

const CompDaily = () => {
  const {_weatherData} = useContext(AppContext)
  if(!_weatherData) return false
  let dailyDataArr = _weatherData.daily
  return (
    <section className='section-daily '>
      <div className="inner style-2">
        <h2>일자별 날씨</h2>
        <ul>
          {
            dailyDataArr.map((v,i)=> <CompDailyLi key={i} dailyData={v}/>)
          }
        </ul>
      </div>
    </section>
  );
};

export default CompDaily;
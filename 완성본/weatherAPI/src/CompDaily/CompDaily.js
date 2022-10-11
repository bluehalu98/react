import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import CompDailyLi from './CompDailyLi';

const CompDaily = () => {
  let { _weatherData } = useContext(AppContext)
  if (!_weatherData) return false
  let dailyDataArr = _weatherData.daily

  return (
    <section className='section-daily'>
      <h2 className='title-daily'>일자별날씨</h2>
      <div className="inner style-2">
        <ul>
          {
            dailyDataArr.map((dailyData, i) => {
              return <CompDailyLi key={i} dailyData={dailyData} />
            })
          }
        </ul>
      </div>
    </section>
  );
};

export default CompDaily;
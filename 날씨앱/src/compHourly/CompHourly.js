import React, { useContext } from 'react';
import { AppContext } from '../App';
import CompHourLi from './CompHourLi';

const CompHourly = () => {
  const {_weatherData} = useContext(AppContext)
  if(!_weatherData) return false
  let hourlyDataArr = _weatherData.hourly

  return (
    <section className='section-hourly '>
      <div className="inner style-2">
        <h2>시간별 날씨</h2>
        <ul>
          {
            hourlyDataArr.map((v,i)=>{
              return <CompHourLi key={i} hourData={v}/>    
            })
          }
        </ul>
      </div>
    </section>
  );
};

export default CompHourly;
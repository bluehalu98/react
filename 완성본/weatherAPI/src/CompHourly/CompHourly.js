import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import CompHourLi from './CompHourLi';

const CompHourly = () => {
  let { _weatherData } = useContext(AppContext)
  if (!_weatherData) return false
  let hourlyDataArr = _weatherData.hourly
  const weatehrColorArr = ['#F00', '#ff7200', '#c2a900', '#43ff78', '#01e9d7', '#007dff', '#005fc2', '#4e30f4', '#3825b7', '#7423b8', '#401579',]

  return (
    <section className='section-hourly'>
      <h2 className='title-hourly'>시간별날씨</h2>
      <div className="inner style-2">

        <ul>
          {
            hourlyDataArr.map((hourData, i) => {
              return <CompHourLi key={i} hourData={hourData} weatehrColorArr={weatehrColorArr}/>
            })
          }
        </ul>
      </div>
      <div className="temp-guide-line">
        {
          weatehrColorArr.map((v, i) => {
            return (
              <div key={i} style={{ top: `${i * 10}%` }}>
                <span className='line' style={{borderBottomColor:`${weatehrColorArr[i]}`}}></span>
                <small style={{color:`${weatehrColorArr[i]}`}}>{50 - i * 10}</small>
              </div>
            )
          })
        }
      </div>
    </section>
  );
};

export default CompHourly;
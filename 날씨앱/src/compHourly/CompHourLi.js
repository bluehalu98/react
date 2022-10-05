import React from 'react';
import { fnSetWeatherData } from '../store/functions';

const CompHourLi = ({hourData}) => {
  let { month, date, temp, icon, hour, rain, status,} = fnSetWeatherData(hourData)
  return (
    <li>
      <p>
        <span>{month}</span>/
        <span>{date}</span>
        <br />
        <span>{hour}</span>시
      </p>
      <p>
      <i className="fa-solid fa-temperature-low"></i>{temp}&#8451;
      </p>
      <p>
        <img src={`${process.env.PUBLIC_URL}/img/icons/${icon}.png`} alt="" />
      </p>
      <p>
        {status}
      </p>
      <p>
        <i className='fa-solid fa-cloud-showers-heavy'></i>
        {rain}mm
      </p>
    </li>
  );
};

export default CompHourLi;
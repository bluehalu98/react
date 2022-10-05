import React from 'react';
import { fnSetWeatherData } from '../store/functions';

const CompDailyLi = ({dailyData}) => {
  const {month, date, icon, rain, status,tempMin, tempMax, day} = fnSetWeatherData(dailyData)
  return (
    <li>
      <p>
        <span>{month}월</span>
        <span>{date}일</span>
        <span>{day}</span>
      </p>
      <p>
      <img src={`${process.env.PUBLIC_URL}/img/icons/${icon}.png`} alt="" />
        <span><i className="fa-solid fa-temperature-low"></i>{tempMax} / {tempMin} &#8451; </span>
      </p>
      <p>
        <i className='fa-solid fa-cloud-showers-heavy'></i>
        {rain}mm
      </p>
      <p>{status}</p>
    </li>
  );
};

export default CompDailyLi;
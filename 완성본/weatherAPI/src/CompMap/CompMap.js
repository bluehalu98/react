import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import { fnGetAddress, fnGetWeatherData } from '../store/functions';

const CompMap = () => {
  let {
    _weatherData, _changeWeatherData,
    _addressData, _changeAddressData,
    _latLng, _changeLatLng, } = useContext(AppContext)

  if (_latLng) {//위경도좌표가 확인되면..
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: _latLng.lat, lng: _latLng.lng },
      zoom: 10
    })//map

    let center = { lat: _latLng.lat, lng: _latLng.lng }
    let marker = new window.google.maps.Marker({ position: center, map: map, });

    map.addListener('click', async (e) => {
      let latLng = {//클릭한 위치의 위경도
        lat: e.latLng.lat(),
        lng: e.latLng.lng() 
      }
      let address = await fnGetAddress(latLng.lat, latLng.lng)//클릭한 위치의 주소를 받아오기
      let yn
      try{
        yn = window.confirm(`${address[5].formatted_address}의 날씨정보로 변경하시겠습니까?`)
      }catch{
        yn = window.confirm('주소를 알수 없습니다\n해당 위치의 날씨정보로 변경하시겠습까까?')
      }
      
      if (yn) {
        let weatherData = await fnGetWeatherData(latLng.lat, latLng.lng)
        _changeLatLng(latLng)//클릭한 위치의 위경도로 좌표 스테이트 변경
        _changeAddressData(address) //클릭한 위치의 위경도로 주소 스테이트 변경
        _changeWeatherData(weatherData)//클릭한 위치의 위경도로 날씨 스테이트 변경
      }
    })//click
  }//if------------------------------------

  return (
    <section className='section-map'>
      <h2 className='title-map'>위치선택</h2>
      <div id='map' className="inner style-2">
      </div>
    </section>
  );
};

export default CompMap;
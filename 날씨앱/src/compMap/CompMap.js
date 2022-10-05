import React, { useContext } from 'react';
import { AppContext } from '../App';
import { fnGetAddress, fnGetWeatherData } from '../store/functions';

const CompMap = () => {
  const {_weatherData,_setWeatherData,_addressData,_setAddressData,_latLng,_setLatLng} = useContext(AppContext)
  /* 구글맵 출력 함수 */
  if(_latLng){
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: _latLng.lat, lng: _latLng.lng },
      zoom: 10
    })//map
    let center = { lat: _latLng.lat, lng: _latLng.lng }
    let marker = new window.google.maps.Marker({position : center, map : map ,});
    map.addListener('click', async (e)=> {
        let latlng = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      }
      let address = await fnGetAddress(latlng.lat,latlng.lng)
      let choice = window.confirm(`${address[5].formatted_address}의 날씨 정보로 변경하시겠습니까?`)
      if(choice){
        let weather = await fnGetWeatherData(latlng.lat,latlng.lng)
        _setLatLng(latlng)
        _setWeatherData(weather)
        _setAddressData(address)
      }
    })//click
  }
  return (
    <section className='section-map '>
      <div id='map' className="inner style-2">
        
      </div>
    </section>
  );
};

export default CompMap;
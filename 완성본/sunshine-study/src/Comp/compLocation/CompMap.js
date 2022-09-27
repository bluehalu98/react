import React, { useEffect } from 'react';

const CompMap = () => {
  useEffect(()=>{
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/js/sub-location.js`;
    document.body.appendChild(script); 
    return(()=>{
      script.remove()
    })
  },[])
  return (
    <div className='map-container'>
      <div className='tab-menu'>
        <button className='active' data-map='google'>Google Map</button>
        <button data-map='kakao'>Kakao Map</button>
      </div>
      <iframe className='google_map active' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.902616691497!2d129.17534081560288!3d35.18397966468821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35688da2d6c01e8b%3A0xc43207b47454139c!2z67aA7IKw6rSR7Jet7IucIO2VtOyatOuMgOq1rCDsoozrj5kgMTEz!5e0!3m2!1sko!2skr!4v1664169303357!5m2!1sko!2skr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className='kakao_map'><div><a href="https://map.kakao.com/?urlX=995879.0&amp;urlY=474195.0&amp;name=%EB%B6%80%EC%82%B0%20%ED%95%B4%EC%9A%B4%EB%8C%80%EA%B5%AC%20%EC%A2%8C%EB%8F%99%20113&amp;map_type=TYPE_MAP&amp;from=roughmap" target="_blank"><img className="map" src="http://t1.daumcdn.net/roughmap/imgmap/69d3fc34b903ab1a4dabb8193000913e19158a9b61cb1d24a7d26f872dc0754c" /></a></div></div>      
    </div >
  );
};

export default React.memo(CompMap);
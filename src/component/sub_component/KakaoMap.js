import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KakaoMap = () => {
  return (
    <Map 
      apiKey='7aecbf369d8fe286e3f7ae56c521b211' // API 키 적용
      center={{ lat: 33.5563, lng: 126.79581 }} 
      style={{ width: '100%', height: '100%' }}
      level={3}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}></MapMarker>
    </Map>
  );
};

export default KakaoMap;

import React, { useEffect, useState, useRef } from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk"

const CATEGORY_CODES = ['AT4', 'FD6', 'CE7']; // 카카오에서 제공하는 관광명소, 음식점, 카페만을 보여주는 코드

export default function KakaoMap({ keyword }) {
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState(null);
  const prevKeywordRef = useRef();

  useEffect(() => {
    if (!map || keyword === prevKeywordRef.current) return;
    
    prevKeywordRef.current = keyword;
    const ps = new window.kakao.maps.services.Places(map);

    ps.keywordSearch(keyword, (data, status, _pagination) => {
      if (status === window.kakao.maps.services.Status.OK) {
        // 카테고리별로 필터링
        const filteredData = data.filter(d => CATEGORY_CODES.includes(d.category_group_code));
        const bounds = new window.kakao.maps.LatLngBounds();
        let newMarkers = [];

        for (let i = 0; i < filteredData.length; i++) {
          newMarkers.push({
            position: {
              lat: filteredData[i].y,
              lng: filteredData[i].x,
            },
            content: filteredData[i].place_name,
          });
          bounds.extend(new window.kakao.maps.LatLng(filteredData[i].y, filteredData[i].x));
        }
        
        setMarkers(newMarkers);
        map.setBounds(bounds);
      }
    });
  }, [map, keyword]);

  return (
    <Map
      center={{ lat: 36.3492, lng: 127.3776 }}
      style={{ width: '100%', height: '100%' }}
      level={1}
      onCreate={setMap}
    >
      {markers.map((marker, index) => (
        <MapMarker
          key={index}
          position={marker.position}
        >
          <div style={{
          display: 'inline-block',
          color: '#000',
          width: '145px',
          textAlign: 'center',
          height: '28px',
          padding: '3px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',  
          whiteSpace: 'nowrap'
          }}>
            {marker.content}
          </div>
        </MapMarker>
      ))}
    </Map>
  );
}

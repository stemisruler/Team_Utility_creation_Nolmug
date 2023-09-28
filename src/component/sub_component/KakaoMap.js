import React, { useEffect, useState, useRef } from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk"

export default function KakaoMap({ keyword }) {
  const [info, setInfo] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState(null);
  const prevKeywordRef = useRef();  // 이전 keyword 저장용


  useEffect(() => {
    if (!map || keyword === prevKeywordRef.current) return; // keyword가 변경되지 않았으면 return
    
    prevKeywordRef.current = keyword;  // 현재 keyword를 prevKeyword로 설정

    const ps = new window.kakao.maps.services.Places();

    ps.keywordSearch(keyword, (data, status, _pagination) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const bounds = new window.kakao.maps.LatLngBounds();
        let newMarkers = [];

        for (var i = 0; i < data.length; i++) {
          newMarkers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });

          bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
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
      {markers.map((marker) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => setInfo(marker)}
        >
          {info && info.content === marker.content && (
              <div style={{
                display: 'inline-block',
                color: '#000',
                width:'145px',
                textAlign: 'center',
                height:'28px',
                padding:'3px'

              }}>
            {marker.content}</div>
          )}
        </MapMarker>
      ))}
    </Map>
  )
}

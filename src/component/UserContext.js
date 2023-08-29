// UserContext.js
import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userProfiles, setUserProfiles] = useState([
    {
      name: 'q',
      userLocation: 'seogu',
      backgroundColor: 'red',
      weather: '04d', // clouds
      currentTemp: 26,
      tempMin: 22, 
      tempMax: 27,
      gradient: ['135CA2', '75C2F6'], // 배열로 색 정보를 저장
    },
    {
      name: 'w',
      userLocation: 'jungu',
      backgroundColor: 'blue',
      weather: '01d', //sunny
      currentTemp: 35,
      tempMin: 27,
      tempMax: 37,
      gradient: ['FD82A7', 'FF8585'], // 배열로 색 정보를 저장

      // 여기에 추가 정보
    },
    {
      name: 'e',
      userLocation: 'yuseong',
      backgroundColor: 'green',
      weather: '09d', //rain
      currentTemp: 20,
      tempMin: 17,
      tempMax: 21,
      gradient: ['33AED7', '6C92F2'], // 배열로 색 정보를 저장

      // 여기에 추가 정보
    },
  ]);
  const [activeUser, setActiveUser] = useState(null); // 초기설정 x

  return (
    <UserContext.Provider value={{ userProfiles, setUserProfiles, activeUser, setActiveUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

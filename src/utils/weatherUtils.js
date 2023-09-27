import defaultIcon from '../icons/clear-sky.png'
import clearSky from '../icons/clear-sky.png';
import clearSkyNight from '../icons/clear-sky-night.png';
import fewClouds from '../icons/few-clouds.png';
import fewCloudsNight from '../icons/few-clouds-night.png';
import clouds from '../icons/clouds.png';
import rain from '../icons/rain.png';

export { defaultIcon };

export const weatherIcons = {
  '01d': clearSky,
  '01n': clearSkyNight,
  '02d': fewClouds,
  '02n': fewCloudsNight,
  '03d': fewClouds, //mostlyClouds
  '03n': fewCloudsNight, //mostlyCloudsNight
  '04d': clouds,
  '04n': clouds,
  '09d': rain,
  '09n': rain,
  '10d': rain, // 가벼운 비와 비의 아이콘이 같은 경우
  '10n': rain, // 가벼운 비와 비의 아이콘이 같은 경우
};

export const weatherNamesInKorean = {
  '01d': '맑음',
  '01n': '맑음(밤)',
  '02d': '구름 조금',
  '02n': '구름 조금(밤)',
  '03d': '구름 많음',
  '03n': '구름 많음(밤)',
  '04d': '흐림',
  '04n': '흐림(밤)',
  '09d': '비',
  '09n': '비(밤)',
  '10d': '가벼운 비',
  '10n': '가벼운 비(밤)'
};
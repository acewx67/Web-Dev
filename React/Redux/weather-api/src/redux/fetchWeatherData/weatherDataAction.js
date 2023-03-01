const fetchWeatherData1 = (data="empty weather data") => {
  // console.log('in action creator')
  return {
    type: 'WEATHER_DATA',
    payload : data,
  };
};

export default fetchWeatherData1;

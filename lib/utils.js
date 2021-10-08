function locationFunction(data) {
  return{   
    formatted_query: data.display_name,
    latitude: data.lat,
    longitude: data.lon
        
  };
}
 
function weather(weatherData) {
  
  const sevenDayForecast = weatherData.slice(0, 7);
  return sevenDayForecast.map(weather => {
    return {
      'forecast': weather.weather.description,
      'time': weather.valid_date,
    };
  });
   
}








module.exports = { locationFunction, weather };
   
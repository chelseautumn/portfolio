const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeather = async (lat, lon, units) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getUserCoords = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

export const getTime = (offset, is12Hour) => {
  const utcTime = new Date().getTime();
  const localTime = new Date(utcTime + offset * 1000);
  return localTime.toLocaleTimeString(is12Hour ? "en-US" : "en-GB", {
    timeZone: "UTC",
  });
};

import { useState, useEffect } from "react";
import { getWeather, getTime, getUserCoords } from "../services/location.js";
import Card from "../components/Card.jsx";
import "../styles/City.css";

function City() {
  const CHICAGO_COORDS = { latitude: 41.8755616, longitude: -87.6244212 };
  const CHICAGO_TIMEZONE_OFFSET = -21600;
  const CHICAGO = "chicago";

  const [coords, setCoords] = useState(CHICAGO_COORDS);
  const [timeZone, setTimeZone] = useState(CHICAGO_TIMEZONE_OFFSET);
  const [name, setName] = useState(CHICAGO);
  const [temp, setTemp] = useState(null);
  const [isFahrenheit, setIsFahrenheit] = useState(true);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [is12Hour, setIs12Hour] = useState(true);

  const units = isFahrenheit ? "imperial" : "metric";
  const tempLabel = isFahrenheit ? "°F" : "°C";

  // alternate between chicago & user's location
  const toggleCity = async () => {
    if (name === CHICAGO) {
      try {
        const data = await getUserCoords();
        if (data.coords.latitude && data.coords.longitude) {
          setCoords(data.coords);
        } else {
          throw new Error("Invalid coordinates", data);
        }
      } catch {
        console.error("Error fetching city data:", error);
      }
    } else {
      setCoords(CHICAGO_COORDS);
    }
  }

  useEffect(() => {
    const fetchyCity = async () => {
      try {
        const data = await getWeather(coords.latitude, coords.longitude, units);
        setTemp(data.main.temp);
        setTimeZone(data.timezone);
        setName(data.name.toLowerCase());
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
fetchyCity();
  }, [coords, units]);

  useEffect(() => {
    const updateTime = () => setTime(getTime(timeZone, is12Hour));
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timeZone, is12Hour])

  return (
    <Card gridArea="chicago" minHeight="60px">
      <div className="city">
        <div>
          <p>currently in</p>
          <h3 className="title button" onClick={toggleCity}>{name}:</h3>
        </div>
        <div>
          <h3 className="stats button" onClick={() => setIs12Hour(!is12Hour)}>{time}</h3>
          {temp !== null && <h3 className="stats button" onClick={() => setIsFahrenheit(!isFahrenheit)}>{temp}{tempLabel}</h3>}
        </div>
      </div>
    </Card>
  );
}

export default City;

import React, { useEffect, useState } from "react";
const api = {
  key: "18feb93c28f72de3b3f2ca6139f10c5b",
  base: "https://api.openweathermap.org/data/2.5/",
};
function Weather() {
  const [Weather, setWeather] = useState({});
  const [WeatherdotMain, setWeatherMain] = useState("");
  const fetchData = () => {
    fetch(`${api.base}weather?q=${"Pnom Penh"}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeatherMain(result.weather[0].main);
        setWeather(result);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full h-full rounded-lg">
      <div className="w-auto h-full relative text-white text-sm md:text-lg flex items-center justify-center rounded shadow shadow-black">
        <button className="flex items-center space-x-4 pr-4 outline-none focus:outline-none">
          <p className="">{Weather?.name}</p>
          <p>{WeatherdotMain}</p>
          <p>
            {Weather?.main?.temp}
            <span className=" absolute items-center justify-center top-13 text-sm">
              °C
            </span>
          </p>
        </button>
      </div>
    </div>
  );
}

export default Weather;

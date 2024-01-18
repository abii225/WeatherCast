import React, { createContext, useEffect, useState } from "react";
import { forecast } from "../Controller/forecast";
import Swal from "sweetalert2";
// =============================================
export const context = createContext();
const DataPack = ({ children }) => {
  const [data, setData] = useState({
    lat: "",
    lon: "",
    forecast: [],
    min: [],
    max: [],
    weather: {
      sunrise: "",
      sunset: "",
      feelLike: "",
      temp: "",
      humidity: "",
      pressure: "",
      wind: "",
      description: "",
    },
    error: "",
  });

  const [theme, setTheme] = useState(true);

  useEffect(() => {
    // console.log(data, "updated data");
  }, [data]);

  //getting current weather details of passed lattitude and longitude
  const getWeather = (lat, lon) => {
    const APPID = `${import.meta.env.VITE_APPID}`;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APPID}`
    )
      .then((res) => res.json())
      .then((data) => {
        let unix_rise = data.sys.sunrise;
        let rise_time = new Date(unix_rise * 1000); //converting unix timestamp to readable time milliseconds
        rise_time = rise_time.toLocaleTimeString();
        const sunrise = rise_time;

        let unix_set = data.sys.sunset;
        let set_time = new Date(unix_set * 1000);
        set_time = set_time.toLocaleTimeString();
        const sunset = set_time;
        const feelLike = data.main.feels_like;
        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const pressure = (data.main.pressure * 0.0145038).toFixed(2); //hpa to psi pressure conversion
        const wind = data.wind.speed;
        const description = data.weather[0].description;

        const iconIMG = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        setData((prev) => {
          return {
            ...prev,
            weather: {
              sunrise,
              sunset,
              feelLike,
              temp,
              humidity,
              pressure,
              wind,
              description,
              iconIMG,
            },
          };
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "middle",
          icon: "error",
          title: `${err}`,
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: "custom-popup-class",
          },
          onOpen: function () {
            // Apply styling directly using JavaScript
            var customPopup = document.querySelector(".custom-popup-class");
            customPopup.style.maxWidth = "250px";
            customPopup.style.fontSize = "10px"; // Set your desired font size
          },
        });
        setData((prev) => {
          return { ...prev, error: err };
        });
      });
  };

  const getForCast = (lat, lon) => {
    const APPID = `${import.meta.env.VITE_APPID}`;
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${APPID}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "forecast");
        let min_max = forecast(data.list); //passing the forecast for preparing chart list
        setData((prev) => {
          return { ...prev, min: min_max[0], max: min_max[1] };
        });
      })
      .catch((err) => {
        // console.log(err);
        Swal.fire({
          position: "middle",
          icon: "error",
          title: `${err}`,
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: "custom-popup-class",
          },
          onOpen: function () {
            // Apply styling directly using JavaScript
            var customPopup = document.querySelector(".custom-popup-class");
            customPopup.style.maxWidth = "250px";
            customPopup.style.fontSize = "10px"; // Set your desired font size
          },
        });
      });
  };

  //   https://api.openweathermap.org/data/2.5/weather?lat=30.8171338&lon=-89.1111595&appid= =>weather
<<<<<<< HEAD
  //   https://api.openweathermap.org/data/2.5/forecast?lat=30.8171338&lon=-89.1111595&appid==> forecast
  //   http://api.openweathermap.org/geo/1.0/direct?q=kozhikode,kerala,india&limit=5&appid==>dynamic geolocation
=======
  //   https://api.openweathermap.org/data/2.5/forecast?lat=30.8171338&lon=-89.1111595&appid= => forecast
  //   http://api.openweathermap.org/geo/1.0/direct?q=kozhikode,kerala,india&limit=5&appid= =>dynamic geolocation
>>>>>>> b1c8252a38733c568aff52b2dc1d33fcb7ef42bf
  return (
    <context.Provider
      value={{
        data,
        setData,
        setTheme,
        theme,
        getWeather,
        getForCast,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default DataPack;

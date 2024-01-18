import React, { useContext } from "react";
import { LuSunrise } from "react-icons/lu";
import { LuSunset } from "react-icons/lu";
import { IoSunny } from "react-icons/io5";
import { FaWater } from "react-icons/fa";
import { FaWind } from "react-icons/fa6";
import { TbGauge } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { GiExplosionRays } from "react-icons/gi";
import { context } from "../ContextApi/DataPack";

const SecondContainer = () => {
  const { data } = useContext(context); //using the context created at Datapack component
  return (
    <section>
      <div className=" mt-5 flex flex-col md:flex-row border-2 border-white rounded-2xl">
        <div
          key="desc"
          className=" flex items-center text-[20px] justify-center md:w-[40%] lg:w-[50%] p-2"
        >
          <div className="">
            <img
              className="min-w-[150px] md:text-[50px]"
              src={
                data.weather.iconIMG
                  ? data.weather.iconIMG
                  : "https://openweathermap.org/img/wn/10d@2x.png"
              }
              alt="icon"
            />
          </div>
          <div>
            <h1 className="text-[1.4em] font-primary text-white leading-6">
              {data.weather.temp ? data.weather.temp : 0}°C
            </h1>
            <h2 className="text-[1em] font-primary md:text-[20px] text-white ">
              feels like {data.weather.feelLike ? data.weather.feelLike : 0}°C
            </h2>
            <h2 className="text-[1em] md:text-[1.5em] font-primary tracking-tight underline text-white ">
              {data.weather.description
                ? data.weather.description
                : "Search for Weather details"}
            </h2>
          </div>
        </div>
        <div
          key="details"
          className=" grid grid-cols-5 justify-evenly gap-2 md:w-[60%] lg:w-[50%] p-2"
        >
          <div className="border-2 border-white rounded-2xl text-white p-1 flex flex-col justify-center items-center align-middle">
            <LuSunrise className="text-[25px] md:text-[50px] " />
            <h2 className="text-[12px] md:text-[20px] leading-5 p-1 text-center">
              {data.weather.sunrise || "00:AM"}
            </h2>
          </div>
          <div className="border-2 border-white rounded-2xl text-white p-1 flex flex-col justify-center items-center align-middle">
            <LuSunset className="text-[25px] md:text-[50px]" />
            <h2 className="text-[12px] md:text-[20px] leading-5 p-1 text-center">
              {" "}
              {data.weather.sunset || "00:PM"}
            </h2>
          </div>
          <div className="border-2 border-white rounded-2xl text-white p-1 flex flex-col justify-center items-center align-middle">
            <WiHumidity className="text-[25px] md:text-[50px]" />
            <h3 className="text-[15px] md:text-[20px] p-1 leading-5 text-center">
              {data.weather.humidity ? data.weather.humidity : "0"}%
            </h3>
          </div>
          <div className="border-2 border-white rounded-2xl text-white p-1 flex flex-col justify-center items-center align-middle">
            <FaWind className="text-[25px] md:text-[50px]" />
            <p className="text-[12px] md:text-[20px] p-1 leading-5 text-center">
              {data.weather.wind ? data.weather.wind : 0}
              <br /> m/s
            </p>
          </div>
          <div className="border-2 border-white rounded-2xl text-white p-1 flex flex-col justify-center items-center align-middle">
            <TbGauge className="text-[25px] md:text-[50px]" />
            <h3 className="text-[15px] md:text-[20px] p-1 leading-5 text-center">
              {data.weather.pressure ? data.weather.pressure : 0}
              <br /> psi
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondContainer;

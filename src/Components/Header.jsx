import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import SecondContainer from "./SecondContainer";
import { FaLocationCrosshairs } from "react-icons/fa6";
import ThirdContainer from "./ThirdContainer";
import { MdDarkMode } from "react-icons/md";
import { context } from "../ContextApi/DataPack";
import Swal from "sweetalert2";

// ===============================================================================
const Header = () => {
  const [val, setVal] = useState(true);
  const { setTheme, data, setData, getWeather, getForCast } =
    useContext(context);

  const [loc, setLoc] = useState({ district: "", state: "", country: "" });
  const inputRef = useRef();
  // ===============
  useEffect(() => {
    // console.log(loc, getForCast);
  }, [loc]);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const getLocationDetails = ({ state, district, country }) => {
    // console.log(loc, "location");
    if (!state || !district || !country) {
      Swal.fire({
        position: "middle",
        icon: "error",
        title: "Give valid location details",
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
      // alert("complete all fields!!!");
      return;
    }

    // navigator.geolocation.getCurrentPosition((pos) => console.log(pos));
    const APPID = `${import.meta.env.VITE_APPID}`;

    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${loc.district},${loc.state},${loc.country}&limit=5&appid=${APPID}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "lat and lon details");
        if (!data[0]) {
          Swal.fire({
            position: "middle",
            icon: "error",
            title: "Give valid location details",
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
          // alert("location Error , Give valid location details");
          return;
        }
        setData((prev) => {
          return { ...prev, lon: data[0].lon, lat: data[0].lat };
        });
        // if (data[0].lat || data[0].lon) {
        //   alert("Location error");
        //   return;
        // }
        // console.log(data[0], "error checking");
        Swal.fire({
          position: "middle",
          icon: "success",
          title: "Request sent",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: "custom-popup-class",
          },
          onOpen: function () {
            // Apply styling directly using JavaScript
            document.querySelector(".custom-popup-class").style.maxWidth =
              "200px";
          },
        });
        getWeather(data[0].lat, data[0].lon);
        getForCast(data[0].lat, data[0].lon);
      })
      .catch((err) => console.log(err));
  };

  // =================  live location weather cast   ============

  const getLive = () => {
    //navigator=>inbuilt function for location status

    navigator.geolocation.getCurrentPosition((pos) => {
      // console.log(pos, "live details");
      let lattitude = pos.coords.latitude;
      let longitude = pos.coords.longitude;
      // console.log(lattitude, longitude);
      if (!lattitude || !longitude) {
        alert("Location Error");
        return;
      }
      getWeather(lattitude, longitude);
      getForCast(lattitude, longitude);
    });
  };

  // =================
  // console.log(setTheme);
  return (
    <>
      <section className="">
        <br />
        <div
          key="navbar"
          className=" flex flex-col md:flex-row md:justify-between"
        >
          {" "}
          <div
            key="sub-1"
            className=" flex  align-middle items-center max-w-[300px] "
          >
            <div className="w-[140px] p-3">
              <img src="https://i.ibb.co/vVnMx6w/weathercast.png" alt="" />
            </div>
            <div key="a" className=" order-1 h-[100%] flex items-center pl-4">
              <div>
                {" "}
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    class="sr-only peer"
                    onChange={(e) => setTheme((prev) => !prev)}
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 font-primary">
                    {/* <MdDarkMode /> */}
                  </span>
                </label>
              </div>
            </div>
            <button
              className="max-w-[100px] md:w-[140px] bg-primary text-black h-[35px] flex justify-between gap-2 items-center rounded-lg p-2  "
              onClick={() => getLive()}
            >
              <FaLocationCrosshairs style={{ fontSize: "20px" }} />
              <p className="font-primary "> location</p>
            </button>
          </div>
          <div key="b" className="  p-2 flex items-center">
            <div key="inputgroup" className=" grid grid-cols-3 gap-2">
              <input
                className=" h-[40px] p-2 rounded-lg font-secondary outline-none "
                type="search"
                name=""
                ref={inputRef}
                placeholder="City"
                value={loc.district}
                id=""
                required={true}
                onChange={(e) =>
                  setLoc((prev) => {
                    return { ...prev, district: e.target.value };
                  })
                }
              />
              <input
                type="search"
                placeholder="State"
                className=" h-[40px] p-2 rounded-lg font-secondary outline-none "
                required={true}
                value={loc.state}
                onChange={(e) =>
                  setLoc((prev) => {
                    return { ...prev, state: e.target.value };
                  })
                }
              />
              <input
                type="search"
                placeholder="Country"
                className="h-[40px] p-2 rounded-lg font-secondary outline-none "
                required={true}
                value={loc.country}
                onChange={(e) =>
                  setLoc((prev) => {
                    return { ...prev, country: e.target.value };
                  })
                }
              />
            </div>
            <button
              className="text-white bg-green-600 font-primary rounded-md  p-2 ml-[8px] "
              onClick={(e) => getLocationDetails(loc)}
            >
              Search
            </button>
          </div>
        </div>

        {/* ================================================= */}
        {/* ====================================================== */}
        <SecondContainer />
        <ThirdContainer />
      </section>
    </>
  );
};

export default Header;

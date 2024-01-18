export function getWeather(lat, lon) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.APPID}`
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
}

export function getForCast(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lon}&lon=${lat}&appid=${process.env.APPID}`
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
}

export const fetchHourlyDailyWithCoordinartes = async (lat, long) => {
  const token = "e4c70ce6a6821649a416cb9521d5f4f8";
  console.log(token);
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,alerts&units=metric&appid=${token}`;
  console.log(url);
  let res = await fetch(url);
  res = await res.json();
  console.log(res)
  return res;
}

export const fetchCurrentWithCoordinartes = async (lat, long) => {
  const token = "e4c70ce6a6821649a416cb9521d5f4f8";
  console.log(token);
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${token}`;
  console.log(url);
  let res = await fetch(url);
  res = await res.json();
  console.log(res)
  return res;
}

export const fetchCurrentWithCityName = async (cityName) => {
  const token = "e4c70ce6a6821649a416cb9521d5f4f8";
  console.log(token);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${token}`;
  console.log(url);
  let res = await fetch(url);
  res = await res.json();
  console.log(res)
  return res;
}
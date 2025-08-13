const key = "iRP9vjtrfMfUwl6XRjyO584XfwSIZhWg";

//get weather information
const getWeather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;
  const response = await fetch(base + query);
  if (response.status != 200) {
    throw new error("unable to fetch the data");
  }
  const data = await response.json();
  return data[0];
};

//get city information
const getCity = async (city) => {
  const base = "https://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;
  const response = await fetch(base + query);
  if (response.status != 200) {
    throw new error("unable to fectch the information");
  }

  const data = await response.json();
  return data[0];
};

// getCity("kathmandu")
//   .then((data) => {
//     return getWeather(data.Key);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error.msg);
//   });

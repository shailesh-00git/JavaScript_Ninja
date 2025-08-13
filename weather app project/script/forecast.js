const key = "iRP9vjtrfMfUwl6XRjyO584XfwSIZhWg";
const getCity = async (city) => {
  const base = "https://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data;
};

getCity("kathmandu")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

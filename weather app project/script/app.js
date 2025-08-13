const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");

//update ui function
const updateUI = (data) => {
  const cityDetail = data.cityDetails;
  const weather = data.weather;
  console.log(cityDetail);
  console.log(weather);

  //extract details of city
  const temp = weather.Temperature.Metric.Value;
  const currWeather = weather.WeatherText;
  const name = cityDetail.EnglishName;

  //UI updating
  details.innerHTML = `
     <h5 class="my-3">${name}</h5>
     <div class="my-3">${currWeather}</div>
     <div class="display-4 my-4">
     <span>${temp}</span>
     <span>&deg;c</span>
     </div>`;
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

//getting city detail and weather
const updateCity = async (city) => {
  const cityDetail = await getCity(city);
  const weather = await getWeather(cityDetail.Key);
  return {
    cityDetails: cityDetail,
    weather: weather,
  };
};
cityForm.addEventListener("submit", (e) => {
  //prevent default action
  e.preventDefault();
  //get city
  const city = cityForm.city.value.trim();
  //reset the form
  cityForm.reset();
  //update city
  updateCity(city)
    .then((data) => {
      updateUI(data);
      // console.log(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
});

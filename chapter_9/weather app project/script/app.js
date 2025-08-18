const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
const forecast = new Forecast();

//update ui function
const updateUI = (data) => {
  const cityDetail = data.cityDetails;
  const weather = data.weather;

  //extract details of city
  const temp = weather.Temperature.Metric.Value;
  // console.log(temp);
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

  //updating image according to day or night

  let iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);
  let timeSrc = null;

  //use of ternary operator
  timeSrc = weather.IsDayTime ? "img/day.svg" : "img/night.svg";

  time.setAttribute("src", timeSrc);

  //adding the info after city search
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
  // Scroll smoothly to the card
  card.scrollIntoView({
    behavior: "smooth",
    block: "end",
  });
};

cityForm.addEventListener("submit", (e) => {
  //prevent default action
  e.preventDefault();
  //get city
  const city = cityForm.city.value.trim();
  //reset the form
  cityForm.reset();
  //update city
  forecast
     .updateCity(city)
    .then((data) => {
      updateUI(data);
      // console.log(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
});

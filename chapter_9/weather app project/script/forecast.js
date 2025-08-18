class Forecast {
  constructor() {
    this.key = "iRP9vjtrfMfUwl6XRjyO584XfwSIZhWg";
    this.weatherURI =
      "http://dataservice.accuweather.com/currentconditions/v1/";
    this.cityURI =
      "https://dataservice.accuweather.com/locations/v1/cities/search";
  }
  async updateCity(city) {
    const cityDetail = await this.getCity(city);
    const weather = await this.getWeather(cityDetail.Key);
    return {
      cityDetails: cityDetail,
      weather: weather,
    };
  }
  async getCity(city) {
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityURI + query);
    if (response.status != 200) {
      throw new error("unable to fectch the information");
    }
    const data = await response.json();
    return data[0];
  }
  async getWeather(id) {
    const query = `${id}?apikey=${this.key}`;
    const response = await fetch(this.weatherURI + query);
    if (response.status != 200) {
      throw new error("unable to fetch the data");
    }
    const data = await response.json();
    return data[0];
  }
}


// import axios from 'axios';

const getWeather = async (city) => {

  cityName.innerHTML = city;

  const newURL = 'https://open-weather13.p.rapidapi.com/city/' + city + '/%7Blang%7D';

  const options = {
    method: 'GET',
    url: newURL,
    headers: {
      'x-rapidapi-key': 'a2f2c76fe5msh81f709ef9410c7ep1cc47cjsn1628d622cc37',
      'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
    }
  };

  try {
    const newURL = 'https://open-weather13.p.rapidapi.com/city/' + city + '/%7Blang%7D';
    const response = await axios.request(options);
    console.log(response.data);
    condition.innerHTML = response.data.weather[0].main;
    temp.innerHTML = response.data.main.temp;
    feels_like.innerHTML = response.data.main.feels_like;
    temp_min.innerHTML = response.data.main.temp_min;
    temp_max.innerHTML = response.data.main.temp_max;
    wind_speed.innerHTML = response.data.wind.speed;
    wind_deg.innerHTML = response.data.wind.deg;
    visibility.innerHTML = response.data.visibility;
    country.innerHTML = response.data.sys.country;
    sunrise.innerHTML = new Date(response.data.sys.sunrise);
    sunset.innerHTML = new Date(response.data.sys.sunset);
    timezone.innerHTML = response.data.timezone;
    temp2.innerHTML = response.data.main.temp;
    condition2.innerHTML = response.data.weather[0].main;
    country2.innerHTML = response.data.sys.country;

  } catch (error) {
    console.error(error);
  }
};

submit.addEventListener('click', (e) => {
  e.preventDefault();
  getWeather(city.value);
})


getWeather('Seattle');


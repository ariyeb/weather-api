const axios = require("axios");

const forecast = async (latitude, longitude) => {
  const key = process.env.OPEN_WEATHER_MAP_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;

  try {
    const result = await axios.get(url);
    return {
      tempature: result.data.main.temp,
      humidity: result.data.main.humidity,
      wind: result.data.wind.speed,
      description: result.data.weather[0].description,
    };
  } catch (err) {
    if (err.response.data) {
      throw {
        status: err.response.data.cod,
        message: err.response.data.message,
      };
    }
  }
};

// forecast(32.088545, 34.78254)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

module.exports = forecast;

//     tempature: ,
//     humidity: ,
//     wind: ,
//     description:
// }

// {
//     longitude: 34.78254,
//     latitude: 32.088545,
//     city_name: 'Tel Aviv-Yafo, Tel Aviv District, Israel'
// }

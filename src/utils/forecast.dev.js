"use strict";

var axios = require("axios");

var forecast = function forecast(latitude, longitude) {
  var key, url, result;
  return regeneratorRuntime.async(function forecast$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          key = process.env.OPEN_WEATHER_MAP_KEY;
          url = "https://api.openweathermap.org/data/2.5/weather?lat=".concat(latitude, "&lon=").concat(longitude, "&appid=").concat(key, "&units=metric");
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(axios.get(url));

        case 5:
          result = _context.sent;
          return _context.abrupt("return", {
            tempature: result.data.main.temp,
            humidity: result.data.main.humidity,
            wind: result.data.wind.speed,
            description: result.data.weather[0].description
          });

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](2);

          if (!_context.t0.response.data) {
            _context.next = 13;
            break;
          }

          throw {
            status: _context.t0.response.data.cod,
            message: _context.t0.response.data.message
          };

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 9]]);
}; // forecast(32.088545, 34.78254)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


module.exports = forecast; //     tempature: ,
//     humidity: ,
//     wind: ,
//     description:
// }
// {
//     longitude: 34.78254,
//     latitude: 32.088545,
//     city_name: 'Tel Aviv-Yafo, Tel Aviv District, Israel'
// }
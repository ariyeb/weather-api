"use strict";

var axios = require('axios');

var geocode = function geocode(city) {
  var token, url, result;
  return regeneratorRuntime.async(function geocode$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          token = process.env.MAPBOX_TOKEN;
          url = "https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(city, ".json?access_token=").concat(token, "&limit=1");
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(axios.get(url));

        case 5:
          result = _context.sent;

          if (!(result.data.features.length > 0)) {
            _context.next = 10;
            break;
          }

          return _context.abrupt("return", {
            longitude: result.data.features[0].center[0],
            latitude: result.data.features[0].center[1],
            city_name: result.data.features[0].place_name
          });

        case 10:
          throw {
            status: 404,
            message: 'Place not found'
          };

        case 11:
          _context.next = 16;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](2);
          throw _context.t0;

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 13]]);
}; // geocode('tkhoihiohv')
//     .then((res) => {
//         console.log(res)
//     }).catch((err) => {
//         console.log(err)
//     })


module.exports = geocode;
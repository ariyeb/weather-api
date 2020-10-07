"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require("express");

var geocode = require("../utils/geocode");

var forecast = require("../utils/forecast");

var router = new express.Router();
router.get("/weather/:city", function _callee(req, res) {
  var city, _ref, longitude, latitude, wetaherData;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          city = req.params.city;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(geocode(city));

        case 4:
          _ref = _context.sent;
          longitude = _ref.longitude;
          latitude = _ref.latitude;
          _context.next = 9;
          return regeneratorRuntime.awrap(forecast(latitude, longitude));

        case 9:
          wetaherData = _context.sent;
          res.send(_objectSpread({
            city: city
          }, wetaherData));
          _context.next = 16;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](1);

          if (_context.t0.status === 404) {
            res.status(404).send(_context.t0);
          }

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 13]]);
});
module.exports = router;
angular.module("mainApp")
  .filter("capitalize", function () {

    return function (input, reverse) {
      if (angular.isString(input)) {
        var interm = reverse ? input.toUpperCase() : input.toLowerCase();
        return reverse ?
          interm[0].toLowerCase() + interm.substring(1) : interm[0].toUpperCase() + interm.substring(1);
      }
      else {
        return input;
      }
    };
  })
  .filter("msToMin", function () {

    return function (input, decimal) {
      if (angular.isNumber(input)) {
        if (angular.isUndefined(decimal)) {
          decimal = 2;
        }
        var minutes = input / 1000 / 60;
        return minutes.toFixed(decimal);
      }
    }
  })
  .filter("settableMap", function () {

    return function (input, map) {
      if (angular.isArray(map)) {
        if (map.indexOf(input) != -1) {
          return true;
        }
      }
      if (angular.isObject(map)) {
        if (map.hasOwnProperty(input) && map[input] === true) {
          return true;
        }
      }
    }

  });
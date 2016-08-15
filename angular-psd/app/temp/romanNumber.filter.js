'use strict';

(function () {

  'use strict';

  app.filter('roman-decimal', function () {

    var romanValueMap = { 'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1 };
    var romanRegex = new RegExp('^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$');
    var decimalValue = 0;

    return function (romanNumber) {

      romanNumber = romanNumber.toUpperCase();
      if (!romanRegex.test(romanNumber)) return romanNumber;

      for (var i = romanNumber.length - 1; i >= 0; i--) {

        var valueBefore = romanValueMap[romanNumber[i - 1]];
        var currentValue = romanValueMap[romanNumber[i]];

        if (valueBefore < currentValue) {
          decimalValue += currentValue - valueBefore;
          i--;
        } else {
          decimalValue += currentValue;
        }
      }

      return decimalValue;
    };
  });
})();
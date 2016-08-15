(function() {

  'use strict'

  app.filter('roman-decimal', function() {

    let romanValueMap = {'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1};
    let romanRegex = new RegExp('^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$');
    let decimalValue = 0;

    return function(romanNumber) {
      
      romanNumber = romanNumber.toUpperCase();
      if(!romanRegex.test(romanNumber))
        return romanNumber;

      for (let i = romanNumber.length-1; i >= 0; i--) {

        let valueBefore = romanValueMap[romanNumber[i-1]];
        let currentValue = romanValueMap[romanNumber[i]];

        if(valueBefore < currentValue) {
          decimalValue += currentValue - valueBefore;
          i--;
        } else {
          decimalValue += currentValue;
        }

      }

      return decimalValue;
    }

  });

}());

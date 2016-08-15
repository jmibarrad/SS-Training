(function() {

  'use strict'

  app.filter('decimal-roman', function() {

    let romanValueMap = {3000: 'MMM', 2000: 'MM', 1000: 'M', 900: 'CM', 500: 'D', 400: 'CD',  100: 'C', 90: 'XC', 50: 'L', 40: 'XL', 10: 'X', 5: 'V', 4: 'IV', 1: 'I'};
    let romanValue = '';

    return function(decimalNumber) {

      if(isNaN(decimalNumber) || decimalNumber > 3999)
        return decimalNumber;

      while (decimalNumber > 0) {
        let placeValue;
        switch(String(decimalNumber).length) {
          case 4:
            placeValue = Math.floor(decimalNumber/1000) * 1000;
            romanValue += romanValueMap[placeValue];
          break;
          case 3:
            placeValue = Math.floor(decimalNumber/100) * 100;
            romanValue += romanValueMap[placeValue];
          break;
          case 2:
            placeValue = Math.floor(decimalNumber/10) * 10;
            romanValue += romanValueMap[placeValue];
          break;
          case 1:
            placeValue = decimalNumber;
            romanValue += romanValueMap[placeValue];
          break;
        }
        decimalNumber -= placeValue;
      }

      return romanValue;
    }

  });

}());

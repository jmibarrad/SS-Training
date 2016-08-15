
(function($) {

  $.fn.verifyPasswordStrength = verifyPasswordStrength;

  const mininumLength = 8;
  const hasUppercase = new RegExp("(.[A-Z]+)");
  const hasSymbol = new RegExp("(.[!@#\$%\^&\*]+)");
  const hasLowercase = new RegExp("(.[a-z]+)");
  const hasMininumLenght = new RegExp("(.{"+mininumLength+",})");
  const hasNumericValue = new RegExp("(.[0-9]+)");


  let $nextSibling = $("<div>");
  let rules = [
                {regex: hasLowercase, error: "Must contain at least a lowercase letter."},
                {regex: hasUppercase, error: "Must contain at least an uppercase letter."},
                {regex: hasMininumLenght, error: "Must contain at least "+mininumLength+" characters."},
                {regex: hasNumericValue, error: "Must contain at least a numeric value."},
                {regex: hasSymbol, error: "Must contain at least an special symbol."}
              ];

  function verifyPasswordStrength() {

    let $input = $(this);
    $input.attr('type', 'password');

    $input.on('focus', function(){
      $input.on('keyup', function(event) {

        event.preventDefault();
        emptyNextSibling(event.which);

        if(verifyKey(event.which)) {
          let rawPassword = $input.val();
          analyzePassword($input, rawPassword);
          $input.after($nextSibling);
        }

      });
    });

  };

  function analyzePassword($input, password) {

    for (var i = 0; i < rules.length; i++) {
      if(!rules[i].regex.test(password)) {
        let $errorMsg = $('<p>').css({color: 'red'});
        $errorMsg.html(rules[i].error);
        $nextSibling.append($errorMsg);
      }
    }

  };

  function verifyKey(key) {
    return (key > 31 && key < 128 || key == 8 ) ? true : false;
  };

  function emptyNextSibling(key){
    if(verifyKey(key))
      $nextSibling.empty();
  };

})(jQuery);


//require('./globals.js');
var Text = require('./Types/text.service');
var Password = require('./Types/password.service');
var _Number = require('./Types/number.service');
var Email = require('./Types/email.service');



(function($) {
	
	'use strict'

	$.fn.validate = validate;

	function validate() {
		
		$input = $(this);
		const type = window.$input.attr('type');
	    $nextSibling = $('<div>');

	    $input.on('keyup', function(ev) {
			
			$input = $(this);
	        e = ev;
	        e.preventDefault();

			if (type === 'password')
				Password.validate();
			else if (type === 'text')
				Text.validate();
			else if (type === 'email')
				Email.validate();
			else if (type === 'number')
				_Number.validate();

			$input.after(window.$nextSibling);

		});

	};

})(jQuery);

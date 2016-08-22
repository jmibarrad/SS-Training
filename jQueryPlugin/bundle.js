(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict'


var Email = {};

Email.validate = function() {

	const defaultPattern = new RegExp('[a-zA-Z][a-zA-Z0-9_]*\@[a-zA-Z]+\\.[a-zA-Z]+');

	let rulesExecuted = false;
	let defaultRules = [	
		{evaluate: function(value){ return defaultPattern.test(value);} , error: "Must contain match the following pattern: "+defaultPattern+"."},
	];

	const required = $input.attr('required');
	const pattern = $input.attr('pattern');

	function verifyAttributes() {
		if (rulesExecuted) return;
		rules = [];
		if (pattern){
			rules.push(new Pattern(pattern));
		} else {
			rules = defaultRules;
		}

		if(required) {
			rules.push(new Required());
		}

		rulesExecuted = true;
	};

	verifyAttributes();
	verifyInput();

};

module.exports = Email;
},{}],2:[function(require,module,exports){
'use strict'


var _Number = {};

_Number.validate = function() {

	const required = $input.attr('required');
	const pattern = $input.attr('pattern');
	const maxlength = $input.attr('maxlength');
	const minlength = $input.attr('minlength');
	const min = $input.attr('min');
	const max = $input.attr('max');
	
	let rulesExecuted = false;

	function verifyAttributes () {
		if (rulesExecuted) return;
		rules = [];

		if (pattern){
			rules.push(new Pattern(pattern));
		}

		if(required) {
			rules.push(new Required());
		}

		if(maxlength && !isNaN(maxlength)) {
			rules.push(new MaxLength(maxlength));
		}

		if(minlength && !isNaN(minlength)) {
			rules.push(new MinLength(minlength));
		}

		if(max && !isNaN(max)) {
			rules.push(new Max(max));
		}

		if(min && !isNaN(min)) {
			rules.push(new Min(min));
		}


		rulesExecuted = true;
	};

	verifyAttributes();
	verifyInput();

};

module.exports = _Number;
},{}],3:[function(require,module,exports){
'use strict'


var Password = {};

Password.validate = function() {

	const required = $input.attr('required');
	const pattern = $input.attr('pattern');

	const mininumLength = 8;
	const hasUppercase = new RegExp("([A-Z]+)");
	const hasSymbol = new RegExp("([!@#\$%\^&\*]+)");
	const hasLowercase = new RegExp("([a-z]+)");
	const hasMininumLenght = new RegExp("(.{"+mininumLength+",})");
	const hasNumericValue = new RegExp("([0-9]+)");

	let rulesExecuted = false;
	let defaultRules = [
		{ evaluate: function(value){ return hasLowercase.test(value);} , error: "Must contain at least a lowercase letter."},
		{ evaluate: function(value){ return hasUppercase.test(value);} , error: "Must contain at least an uppercase letter."},
		{ evaluate: function(value){ return hasMininumLenght.test(value);} , error: "Must contain at least " + mininumLength + " characters."},
		{ evaluate: function(value){ return hasNumericValue.test(value);} , error: "Must contain at least a numeric value."},
		{ evaluate: function(value){ return hasSymbol.test(value);} , error: "Must contain at least an special symbol."}
	];

	function verifyAttributes () {
		if (rulesExecuted) return;
		rules = [];
		if (pattern){
			rules.push(new Pattern(pattern));
		} else {
			rules = defaultRules;
		}

		if(required) {
			rules.push(new Required());
		}

		rulesExecuted = true;
	};
	
	verifyAttributes();
	verifyInput();

};

module.exports = Password;

},{}],4:[function(require,module,exports){
'use strict'


var Text = {};

Text.validate = function() {

	const required = $input.attr('required');
	const pattern = $input.attr('pattern');
	const maxlength = $input.attr('maxlength');
	const minlength = $input.attr('minlength');
	
	let rulesExecuted = false;

	function verifyAttributes () {
		if (rulesExecuted) return;
		rules = [];

		if (pattern){
			rules.push(new Pattern(pattern));
		}

		if(required) {
			rules.push(new Required());
		}

		if(maxlength && !isNaN(maxlength)) {
			rules.push(new MaxLength(maxlength));
		}

		if(minlength && !isNaN(minlength)) {
			rules.push(new MinLength(minlength));
		}


		rulesExecuted = true;
	};

	verifyAttributes();
	verifyInput();

};

module.exports = Text;
},{}],5:[function(require,module,exports){

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

},{"./Types/email.service":1,"./Types/number.service":2,"./Types/password.service":3,"./Types/text.service":4}]},{},[5]);

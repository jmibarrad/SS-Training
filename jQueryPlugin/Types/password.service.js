'use strict'


var Password = {

	validate: function() {

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
			{evaluate: function(value){ return hasLowercase.test(value);} , error: "Must contain at least a lowercase letter."},
			{evaluate: function(value){ return hasUppercase.test(value);} , error: "Must contain at least an uppercase letter."},
			{evaluate: function(value){ return hasMininumLenght.test(value);} , error: "Must contain at least " + mininumLength + " characters."},
			{evaluate: function(value){ return hasNumericValue.test(value);} , error: "Must contain at least a numeric value."},
			{evaluate: function(value){ return hasSymbol.test(value);} , error: "Must contain at least an special symbol."}
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

	}

};


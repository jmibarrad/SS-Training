'use strict'


var Email = {

	validate: function() {

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

	}

};

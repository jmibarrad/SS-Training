'use strict'


var Checkbox = {

	validate: function() {

		let rulesExecuted = false;

		const required = $input.attr('required');
		const pattern = $input.attr('value');

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


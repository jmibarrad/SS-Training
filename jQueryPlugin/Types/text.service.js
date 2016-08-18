'use strict'


var Text = {

	validate: function() {

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

	}

};


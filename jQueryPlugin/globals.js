

var $input;
var $nextSibling;
var e;
var rules = [];

function verifyInput() {

	emptyNextSibling(e.which);
	if(verifyKey(e.which)) {

		let val = $input.val();
	    applyRules(val);
	}

};

function applyRules(value) {
	for (var i = 0; i < rules.length; i++) {
	  if(!rules[i].evaluate(value)) {
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
	if(verifyKey(key)){
	 	$nextSibling.empty();
	}

};
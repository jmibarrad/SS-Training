'use strict'

var Required = function() {
	this.error = 'Field is required.';
};

Required.prototype.evaluate = function(value){
 	return new RegExp('\S').text(value);
};

var Min = function(value) {
	this.value = value;
	this.error = 'Minimum value permitted: ' + value + '.';
};

Min.prototype.evaluate = function(value){
 	return Number(value) >= Number(this.value);
};

var Max = function(value) {
	this.value = value;
	this.error = 'Maximum value permitted: ' + value + '.';
};

Max.prototype.evaluate = function(value){
	console.log(value <= this.value, value, this.value)
 	return Number(value) <= Number(this.value);
};

var Pattern = function(pattern){
	this.pattern = pattern;
	this.error = 'Must match the following pattern; ' + pattern + '.';
};

Pattern.prototype.evaluate = function(value){
 	return new RegExp(this.pattern).test(value);
};

var MinLength = function(value) {
	this.value = value;
	this.error = 'Min characters permitted: ' + value + '.';
};

MinLength.prototype.evaluate = function(value){
 	return value.length >= this.value;
};

var MaxLength = function(value) {
	this.value = value;
	this.error = 'Max characters permitted: ' + value + '.';
};

MaxLength.prototype.evaluate = function(value){
 	return value.length <= this.value;
};
     
var Value = function() {
	this.error = 'Value is required';
};

Value.prototype.value = function(value){
 	return value.length;
};
   
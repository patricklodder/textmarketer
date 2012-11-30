

var TextMarketer = module.exports = function (user, pass, env) {
	this.username = user;
	this.password = pass;
	this.baseUrl = (env === 'production') ? TextMarketer.PRODUCTION_URL : TextMarketer.SANDBOX_URL;
};

TextMarketer.PRODUCTION_URL = '';
TextMarketer.SANDBOX_URL = '';

TextMarketer.prototype.isLoginValid = function (cb) {
	//TODO stub
};

TextMarketer.prototype.sendSMS = function (message, to, originator, validity, email, custom, schedule, cb) {
	//TODO stub
};

TextMarketer.prototype.transferCreditsToAccount = function (quantity, target, cb) {
	//TODO stub
};

TextMarketer.prototype.transferCreditsToUser = function (quantity, user, pass, cb) {
	//TODO stub
};

TextMarketer.prototype.getKeywordAvailability = function (keyword, cb) {
	//TODO stub
};

TextMarketer.prototype.getGroups = function (cb) {
	//TODO stub
};

TextMarketer.prototype.addNumbersToGroupWithName = function (numbers, groupName, cb) {
	//TODO stub
};

TextMarketer.prototype.getGroup = function (group, cb) {
	//TODO stub
};

TextMarketer.prototype.addGroup = function (name, cb) {
	//TODO stub
};

TextMarketer.prototype.getDeliveryReports = function (cb) {
	//TODO stub
};

TextMarketer.prototype.createSubAccount = function (companyName, ntfyMobile, ntfyEmail, username, password, promoCode, overrideRates, cb) {
	//TODO stub
};

TextMarketer.prototype.addError = function (code, msg) {
	//TODO stub
};

TextMarketer.prototype.restGatewayCall = function (service, method, params, cb) {
	//TODO stub
};


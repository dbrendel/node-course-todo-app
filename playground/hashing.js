const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

//console.log(SHA256('this is a message').toString());

var data = {
	id: 10
};

var token = jwt.sign(data, 'asdfghj');

console.log(token);

var decoded = jwt.verify(token, 'asdfghj');

console.log(decoded);

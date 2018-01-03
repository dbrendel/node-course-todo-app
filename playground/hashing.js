const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'qwertyuiop';

// bcrypt.genSalt(10, (err, salt) => {
// 	bcrypt.hash(password, salt, (err, hash) => {
// 		console.log(hash);
// 	});
// });

var hashedPw = '$2a$10$.U6CsbzCtV6MugVFQQCtbu6FoMm0koqsVAX8EOxNB6nxN0eLISHaO';

bcrypt.compare(password, hashedPw, (err, res) => {
	console.log(res);
});

//console.log(SHA256('this is a message').toString());

// var data = {
// 	id: 10
// };
//
// var token = jwt.sign(data, 'asdfghj');
//
// console.log(token);
//
// var decoded = jwt.verify(token, 'asdfghj');
//
// console.log(decoded);

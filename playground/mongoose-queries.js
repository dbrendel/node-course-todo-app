const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a43f6f80bf0b1f05555a619';
//
// if (!ObjectID.isValid(id)) {
// 	console.log('Id not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });
//
// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));


User.findById('5a43abbc11376ff9646f9718').then((user) => {
	if (!user) {
		return console.log('User not found');
	}
	console.log('User by ID', user);
}, (e) => {
	console.log(e)
});

const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
	console.log(result);
});

Todo.findOneAndRemove({_id: '5a43f6f80bf0b1f05555a619'}).then((todo) => {
	console.log(todo);
});

Todo.findByIdAndRemove('5a43f6f80bf0b1f05555a619').then((todo) => {
	console.log(todo);
});

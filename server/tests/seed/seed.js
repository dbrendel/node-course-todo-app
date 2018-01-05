const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

// users

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
	_id: userOneId,
	email: 'one@example.com',
	password: 'userOnePass',
	tokens: [{
		access: 'auth',
		token: jwt.sign({_id: userOneId, access: 'auth'}, 'asdfghj').toString()
	}]
}, {
	_id: userTwoId,
	email: 'two@example.com',
	password: 'userTwoPass'
}];

const populateUsers = (done) => {
	User.remove({}).then(() => {
		var userOne = new User(users[0]).save();
		var userTwo = new User(users[1]).save();

		return Promise.all([userOne, userTwo]);
	}).then(() => done());
};

// todos

const todos = [
	{
		_id: new ObjectID(),
		text: 'First test todo'
	}, {
		_id: new ObjectID(),
		text: 'Second test todo',
		completed: true,
		completedAt: 1234567
	}
];

const populateTodos = (done) => {
	Todo.remove({})
		.then(() => {Todo.insertMany(todos)})
		.then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};
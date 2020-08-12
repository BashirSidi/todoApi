let db = require('../models');

exports.getTodos = async (req, res) => {
	try {
		let todos = await db.Todo.find();
		await res.json(todos);
	} catch (error) {
		res.send(error);
	}
};

exports.createTodo = async (req, res) => {
	try {
		let newTodo = await db.Todo.create(req.body);
		await res.status(201).json(newTodo);
	} catch (error) {
		res.send(error);
	}
};

exports.getTodo = async (req, res) => {
	try {
		let foundTodo = await db.Todo.findById(req.params.todoId);
		await res.status(201).json(foundTodo);
	} catch (error) {
		res.send(error);
	}
};

exports.updateTodo = async (req, res) => {
	try {
		let todo = await db.Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true });
		await res.status(201).json(todo);
	} catch (error) {
		res.send(error);
	}
};

exports.deleteTodo = async (req, res) => {
	try {
		await db.Todo.remove({ _id: req.params.todoId });
		await res.status(201).json({ message: 'Data deleted!' });
	} catch (error) {
		res.send(error);
	}
};

module.exports = exports;

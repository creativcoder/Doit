'use strict';

Template.todos.helpers({
     'todo': function() {
     return Todos.find({},{sort:{createdAt:-1}});
     }
});

Template.addTodo.helpers({
	disabled() {
		return Todos.find({}).count() == 0;
	}
})
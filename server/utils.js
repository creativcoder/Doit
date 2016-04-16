Meteor.methods({
    "remove_all_todos": function() {
    	Todos.remove({});
    }
});

Meteor.publish("todos", ()=> {
	return Todos.find({});
})
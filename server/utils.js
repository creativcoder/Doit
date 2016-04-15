Meteor.methods({
    'remove_all_todos': function() {
    	Todos.remove({});
    }
});
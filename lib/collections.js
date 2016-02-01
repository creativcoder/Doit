Todos = new Mongo.Collection("todos");

Meteor.startup(function() {
    Todos.remove({});
});


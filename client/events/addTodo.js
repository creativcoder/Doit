Template.addTodo.events({
    'submit #todo-field' : function(event) {
        event.preventDefault();
        var todo_task = $('[name="todoName"]').val();
        if (todo_task === '') {
            msg = 'Oops looks like you didn\'t enter any task';
            Materialize.toast(msg, 3000);
        } else {
            Todos.insert({
            name:todo_task,
            completed:false,
            createdAt: new Date()
            });    
        $('[name="todoName"]').val('');
        }
    }
});

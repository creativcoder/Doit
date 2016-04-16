'use strict';

import { Session } from 'meteor/session';

Session.setDefault('task_count',0);

Template.addTodo.events({
    'submit #todo-field' : (event) => {
        event.preventDefault();
        let cur_tasks = Session.get('task_count');
        if (cur_tasks > 4) {
            swal(`Sorry only ${cur_tasks} tasks a day`, "You should first complete the remaining tasks.", "error");
            return;
        }
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
        Session.set('task_count',Session.get('task_count')+1);
        console.log(Session.get('task_count'));
        }
    },
    'click #clear-btn': (event) => {
        event.preventDefault();
        swal({
        title: "Are you sure?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yeah!",
        cancelButtonText: "No",
        closeOnConfirm: true,
        html: false
        }, () => {
        Meteor.call('remove_all_todos');
        Session.set('task_count', 0);
        });
    } 
});

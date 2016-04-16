'use strict';

Template.todoItem.events({
    'click .remove-btn': (e) => {
        e.preventDefault();
        var confirm = window.confirm("You sure you wanna delete it ?");
        if(confirm) {
        var doc_id = this._id;
        Todos.remove({_id: doc_id});
        }
    },
    'click .edit-btn': (e) => {
        var parent_span = e.target.parentElement;
        parent_span.setAttribute('id','edit-mode');

        // if in edit mode
        if($('.edit-btn').hasClass("editing")) {
                var updated_task = $('#edit-mode .added-task').val();
                console.log(updated_task);
                Todos.update({_id:this._id},{$set:{name:updated_task}});
                $('#edit-mode .editing').text("Edit");
                $('#edit-mode .edit-btn').toggleClass('editing');
                $('#edit-mode .added-task').prop('disabled',true);
                e.target.parentElement.removeAttribute('id');
            } else {
                // enter in edit mode 
                $('#edit-mode .edit-btn').text("Save");
                $('#edit-mode .edit-btn').toggleClass('editing');
                $('#edit-mode .added-task').prop('disabled',false);
            }
    }
});

Template.todoItem.helpers({
    isDisabled: () => true,
    createdAt_moment: () => (moment(this.createdAt).fromNow())
});
Template.todoItem.events({
    'click .remove-btn':function(event) {
        event.preventDefault();
        var confirm = window.confirm("You sure you wanna delete it");
        if(confirm) {
        var doc_id = this._id;
        Todos.remove({_id: doc_id});
        }
    },
    'click .edit-btn': function() {
        // enter edit mode
            console.log($(this));
            $(this).parent().setAttr("id","edit-mode");
            $('.added-task').prop('disabled',false);
/*
        } else {
            // exit from edit mode
            Todos.update({_id:this._id},{$set:{'name':$('#edit-mode'+this._id).text()}});
        }*/
        
    }
});

Template.todoItem.helpers({
    isDisabled: function() {
        return true;
    },
    createdAt_moment: function() {
        return moment(this.createdAt).fromNow();
    }
});
Meteor.methods({
    'toast_out': function(msg) {
        Materialize.toast('msg', 4000);
    }
});
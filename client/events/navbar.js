import { Themer } from '../../lib/themer.js';

Template.navbar.rendered = function() {
	Session.set('show_progress', false);
}

Template.navbar.events({
	'click #theme-btn': function() {
		Session.set('show_progress', true);
		setTimeout(() => {
			let navbar = document.getElementById('navbar-theme');
			navbar.className=Themer.changeTheme();
			Session.set('show_progress', false);
		},2000);
	}
})
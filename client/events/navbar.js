'use strict';

import { Themer } from '../../lib/themer.js';

Template.navbar.rendered = () => Session.set('show_progress', false);

Template.navbar.events({
	'click #theme-btn': () => {
		Session.set('show_progress', true);
		setTimeout(() => {
			let navbar = document.getElementById('navbar-theme');
			navbar.className=Themer.changeTheme();
			Session.set('show_progress', false);
		},2000);
	}
})
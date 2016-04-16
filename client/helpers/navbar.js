'use strict';

import { Session } from 'meteor/session';

Template.navbar.helpers({
	show_progress() {
		return Session.get('show_progress');
	}
})
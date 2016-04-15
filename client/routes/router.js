FlowRouter.route('/', {
	name:'home',
	action() {
		BlazeLayout.render('layout');
	}
})

FlowRouter.route('/github/login/', {
	name:'gh_login',
	action() {
		BlazeLayout.render('github_login');
	}
})
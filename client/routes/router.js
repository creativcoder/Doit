FlowRouter.route('/', {
	name:'home',
	action() {
		BlazeLayout.render('layout', holder='addTodo');
	}
})

FlowRouter.route('/github/login', {
	name:'gh_login',
	action() {
		BlazeLayout.render('layout', holder='github_login');
	}
})
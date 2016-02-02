Router.route('/', function() {
    this.render('blank');
})

Router.route('/github/login', function() {
    this.render('github_login');
});
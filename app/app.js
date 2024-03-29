angular.module('app', [
	'ngRoute',
	'app.controllers'
]).config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'views/post.html',
		controller: 'PostController'
	}).when('/post/:id', {
		templateUrl: 'views/singlepost.html',
		controller: 'SinglePostController'
	}).when('/about', {
		templateUrl: 'views/about.html',
		controller: 'SinglePostController'
	}).when('/archive', {
		templateUrl: 'views/archive.html',
		controller: 'ArchiveController'
	}).when('/page/:id', {
		templateUrl: 'views/page.html',
		controller: 'PageController'
	}).otherwise({
		redirectTo: '/'
	});
}]);
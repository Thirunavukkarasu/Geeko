geekoApp.factory('geekoAppFactory', function ($resource) {
	return $resource('serverside/movies.json');
});
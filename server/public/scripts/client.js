var app = angular.module('CarApp', ['ngRoute']);

app.config(function($routeProvider) {
    //route provider decides what views and controllers go together
    $routeProvider.when('/', {
        templateUrl: '/views/company.html',
        controller: 'CompanyController as vm'
    }).when('/cars', {
        templateUrl: '/views/cars.html',
        controller: 'CarController as vm'
    }).when('/home', {
        redirectTo: '/'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});
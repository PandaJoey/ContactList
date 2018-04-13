/*Main app module used by angular to use angular frameworks
  uses ngRoute to change views seamlessly.
 */
let app = angular.module('ContactsApp', ['ngRoute']);

// ng-route config file to change views
app.config(function ($routeProvider, $locationProvider) {
    // Work around to fix link routes in angular 1.6.0
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: '/views/contactTemplate.html',
            controller: 'mainController'
        })
        .when('/Home', {
            templateUrl: 'views/contactTemplate.html',
            controller: 'mainController'
        })
        .when('/Add User', {
            templateUrl: '/views/addContact.html',
            controller: 'addContactController'
        })
        .when('/Edit User/:id', {
            templateUrl: '/views/editContact.html',
            controller: 'editContactController'
        })
        .when('/Login', {
            templateUrl: '/views/login.html',
            controller: 'loginController'
        })
        .when('/Create Account', {
            templateUrl: '/views/createAccount.html',
            controller: 'createAccountController'
        })
        .otherwise({redirectTo: '/'});
});
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
            templateUrl: '/NetNativesProject/views/contactTemplate.html',
            controller: 'mainController'
        })
        .when('/Home', {
            templateUrl: '/NetNativesProject/views/contactTemplate.html',
            controller: 'mainController'
        })
        .when('/Add User', {
            templateUrl: '/NetNativesProject/views/addContact.html',
            controller: 'addContactController'
        })
        .when('/Edit User/:id', {
            templateUrl: '/NetNativesProject/views/editContact.html',
            controller: 'editContactController'
        })
        .when('/Login', {
            templateUrl: '/NetNativesProject/views/login.html',
            controller: 'loginController'
        })
        .when('/Create Account', {
            templateUrl: '/NetNativesProject/views/createAccount.html',
            controller: 'createAccountController'
        })
        .otherwise({redirectTo: '/'});
});
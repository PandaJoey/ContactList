/* Main controller used by the views to delete and edit users, also gets the contacts and messages
*  to be used in respective views. also used as the default view in app when routing.
*/
app.controller('mainController', ['$scope', 'ContactService', '$timeout', '$location', function ($scope, ContactService, $timeout, $location) {

    $scope.message = "";
    $scope.contacts = ContactService.getContacts();
    $scope.message = ContactService.getMessage();
    $timeout(function () {
        $scope.message = ContactService.blankMessage();
    }, 3000);

    /* Used to delete a contact based on the contacts id pulls the data from
       the service where the contact data is stored and updates the array when completed.*/
    $scope.deleteContact = function (id) {
        $scope.message = ContactService.deleteContact(id);
        $timeout(function () {
            $scope.message = ContactService.blankMessage();
        }, 3000);
    };

    /*Used to show the selected contacts data in edit contact view via id.
    * had to use this because i wanted to use the html button to take us
    * there instead of a nav menu*/
    $scope.editUser = function (id) {
        let url = '/Edit User/' + id;
        $location.path(url);
    }

}]);

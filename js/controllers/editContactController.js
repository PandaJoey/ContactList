/* Controller used to edit the contact had to add routeparams and location so i could change
   the path   that the user was taken to after updating a contacts information
   for a better user experience.*/

app.controller('editContactController', ['$scope', 'ContactService', '$timeout', '$routeParams', '$location', function ($scope, ContactService, $timeout, $routeParams, $location) {

    //Gets the contact id from the route using routeparams assigned to scope.contact to populate the view.
    $scope.contact = ContactService.getContact($routeParams.id);

    $scope.message = "";

    /* Updates the contact information given by the user and then returns you to the root page to
     see  that info.*/
    $scope.updateContact = function () {
        let contact = $scope.contact;
        $scope.message = ContactService.updateContact(contact);
        $location.path('/')
    };
}
]);

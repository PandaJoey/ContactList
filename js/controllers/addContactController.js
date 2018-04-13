/* Controller used to add contacts takes in the service to allow access to contact data.
   the timeout function is a built in angular function that allows us to set a timeout for
   messages that are being passed to the views.
 */
app.controller('addContactController', ['$scope', 'ContactService', '$timeout', function ($scope, ContactService, $timeout) {
    //framework for adding a contact used in the view html files.
    $scope.contact = {
        name: "",
        location: "",
        email: "",
        primary: "",
    };
    $scope.message = "";

    /*
        Adds a contact to the array with a new id and sends a message to let the user know it has been done.
        the message is then removed after 3 seconds.
     */
    $scope.addContact = function () {
        let contact = $scope.contact;
        $scope.lastId = ContactService.getLastId();
        contact.id = $scope.lastId;
        $scope.message = ContactService.addContact(contact);
        $timeout(function () {
            $scope.message = ContactService.blankMessage();
        }, 3000);
        reset();
    };

    // resets the data after the contact has been added so you can add another.
    function reset() {
        $scope.contact = {
            name: "",
            location: "",
            email: "",
            primary: "",
        }
    }

}
]);




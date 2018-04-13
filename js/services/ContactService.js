/*
* A service to deliver contact information to controllers
* */

app.factory('ContactService', [function () {
    let factory = {};
    let message = "";

    //Used to return contacts from the contact array.
    factory.getContacts = function () {
        return contactList;
    };

    //Used to assign an id to a contact.
    factory.getLastId = function () {
        return contactList.contacts.length;
    };

    /*Used to push a contact into the contacts array, and display a
    message that it was successful.*/
    factory.addContact = function (contact) {
        contactList.contacts.push(contact);
        message = "The contact has been added successfully";
        return message;
    };

    /*Used to give controllers access to
      delete an contact using the id that has been assigned in
    * the array when is created. returns a message successfully deleted*/
    factory.deleteContact = function (id) {
        for (let i = 0; i < contactList.contacts.length; i++) {
            if (contactList.contacts[i].id === id) {
                contactList.contacts.splice(i, 1);
                break
            }
        }
        message = "Contact was successfully deleted";
        return message;
    };

    //Used by a controller to get a contact into the view by its id in the array.
    factory.getContact = function (id) {
        for (let i = 0; i < contactList.contacts.length; i++) {
            if (contactList.contacts[i].id === parseInt(id)) {
                return contactList.contacts[i];
            }
        }
    };

    //Used to update a contacts information in the array based on what a user has entered in the view.
    factory.updateContact = function (contact) {
        for (let i = 0; i < contactList.contacts.length; i++) {
            if (contactList.contacts[i].id === parseInt(contact.id)) {
                let originalContact = contactList.contacts[i];
                originalContact.name = contact.name;
                originalContact.location = contact.location;
                originalContact.email = contact.email;
                originalContact.primary = contact.primary;
            }

        }
        message = "Contact edited successfully!";
        return message;
    };

    //used to allow controllers to display messages
    factory.getMessage = function () {
        return message;
    };

    //Used to reset the message used by controllers to reset a message after a given time.
    factory.blankMessage = function () {
        message = "";
        return message;
    };

    /*Contact data as supplied by NetNatives, i had to change its format as
    My ide said it was incorrect.*/
    let contactList =
        {
            "contacts": [
                {
                    "name": "Steve Wozniak",
                    "email": "woz@apple.com",
                    "location": "United States",
                    "primary": "718-886-5540"
                },
                {
                    "name": "Linus Torvalds",
                    "email": "linus@linux.com",
                    "location": "Finland",
                    "primary": "+358 9 568 042"
                },
                {
                    "name": "Bill Gates",
                    "email": "bill@microsoft.com",
                    "location": "United States",
                    "primary": "4841698514"
                },
                {
                    "name": "Richard Stallman",
                    "email": "richard@fsf.org",
                    "location": "United States",
                    "primary": "664 613 7896"
                },
                {
                    "name": "Ada Lovelace",
                    "email": "ada@lovelace.co.uk",
                    "location": "United Kingdom",
                    "primary": "02394 786236"
                },
                {
                    "name": "Alan Turing",
                    "email": "alan@turingtest.org.uk",
                    "location": "United Kingdom",
                    "primary": "+44796 37829368"
                },
                {
                    "name": "Charles Babbage",
                    "email": "charles@diffengine.com",
                    "location": "United Kingdom",
                    "primary": "+442392343478"
                },
                {

                    "name": "Dennis Ritchie",
                    "email": "dennis@cprogramming.com",
                    "location": "United States",
                    "primary": "012-589-1651"
                },
                {
                    "name": "Ken Thompson",
                    "email": "ken@unix.net",
                    "location": "United States",
                    "primary": "6434030340"
                },
                {
                    "name": "Steve Jobs",
                    "email": "steve@apple.com",
                    "location": "United States",
                    "primary": "805-110-9825"
                }
            ]
        };

    // creates id's for the contacts.
    for (let i = 0; i < contactList.contacts.length; i++) {
        contactList.contacts[i].id = i;
    }

    //TODO Couldn't get this to not return a promise. Will revisit
    // let contactList = function(){
    //     return $http({
    //         method: 'GET',
    //         //Tried to pull data directly from server but failed due to CORS request.
    //         // url: 'http://akerolabs.com/dev-task/contacts.json'
    //         url: 'contacts.json'
    //     }).then(function successCallback(response) {
    //         return response.data
    //     }, function errorCallback(response) {
    //         return response.data
    //     });
    // };


    return factory;
}]);







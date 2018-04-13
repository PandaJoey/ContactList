'# ContactList 

I have hosted the app using Heroku for two reasons, I wanted to try it out and funnily enough after we talked about aws charging people they started to charge me so I closed my account!

Link to app: https://netnativescontactlistproject.herokuapp.com/index.html#/

I had to use an index.php file to redirect to my index.html file, this is because I was unable to get the back end going in time.
This was the work around I found to trick heroku into thinking I had a php back end.

How to use the app.

You will be taken to the main view that will display the contact cards for each contact from the json file supplied.

To add a user you can click on Add User and enter details, on submit you will be given a message saying success, this does
not have a redirect as I think it’s better this way if you want to add more than one contact at a time.

To edit a user, return to home by clicking home or CONTACTS, then click on the pen and paper icon inside a contact.
This takes you to do the edit screen with the current cards data in it for you to edit, when finished hit submit and you will be
redirected to the home page to see that you contact has been changed.

To delete a user simply click on the trash can in a contacts card.

Login currently does not work as I was unable to implement a database, same goes for create account.

How I got on:

It was an interesting experience using angularJS, somethings I liked and others I did not, for example
I think the use of views is awesome, I like the fact that you can change a view without having to actually 
leave the original page. I found it extreamly hard to find decent examples of how to implement things in 
angularjs, everyone had really different ways of doing things or version was really different, somethings 
worked in some versions and not in others. This was frustrating at times. I spent a few days trying to make the
$http.get function to work but could not get it to return anything other than a promises and not the data inside it.
I can see the benefits to using angularJS as it has really good unit testing capabilities, it also keeps code clean
like normal java but almost making everything a class and separate, e.g. the views, directives, services and controllers.

It took me a little while to understand how routes work, but once I did i actually quite liked how it worked.

I used bootstrap so I could quickly create a nice dynamic page that works nicely for what I wanted in minimal time.

I wanted to make a better looking contact list than all the examples I found, if I had more time it would have been cool
to add drag and drop uploads so people could add pictures. I also wanted it when you clicked edit that you could edit on
the actual card it’s self but it required an angular library that let you edit links in text areas, but I didn't like it.

I looked into mongoDB with express and nodeJS, got it all setup on my computer but because I was unable to make the http 
requests work was unable to use them as of right now.

All in all it’s been a nice project, learning a lot of new technologies with the limited time that I had. 

Thank you for the opportunity.

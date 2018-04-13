/*Used to create the links in the nav that are used as routes to change views. when a navmenu item is
  clicked it will change the view to the what it is linked to in the app file.
 */
app.controller('navController', function ($scope) {
    $scope.nav = {
        navMenus: ['Home', 'Add User', 'Login', 'Create Account'],
        selectedIndex: 0,
        navClicked: function ($index) {
            $scope.nav.selectedIndex = $index;
        }
    };
});
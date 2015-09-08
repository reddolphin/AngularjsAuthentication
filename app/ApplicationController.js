/**
 * Created by alex on 08/09/2015.
 */
//https://medium.com/opinionated-angularjs/techniques-for-authentication-in-angularjs-applications-7bbf0346acec
(function(){

    function ApplicationController($scope, USER_ROLES, AuthService) {
        var vm = $scope;

        vm.currentUser = null;
        vm.userRoles = USER_ROLES;
        vm.isAuthorized = AuthService.isAuthorized;

        vm.setCurrentUser = function (user) {
            vm.currentUser = user;
        };
    }

    angular.module('ShopkinsApp').controller('ApplicationController',ApplicationController);

})();
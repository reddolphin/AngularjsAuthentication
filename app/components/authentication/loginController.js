/**
 * Created by alex on 06/02/2015.
 */
(function(){

    function LoginController($scope, $rootScope, AUTH_EVENTS, AuthService){
        var vm = this;

        vm.message=function() {
            return 'This is LoginController screen';
        }


        vm.credentials = {
            username: '',
            password: ''
        };

        vm.login = function (credentials) {
            AuthService.login(credentials).then(function (user) {
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                $scope.setCurrentUser(user);
            }, function () {
                $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            });
        };
    }

    angular.module('ShopkinsApp').controller('LoginController',LoginController);

})();
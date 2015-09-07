/**
 * Created by alex on 06/02/2015.
 */

(function (){

    angular
        .module('ShopkinsApp')
        .config(['$routeProvider',routes]);

    function routes($routeProvider) {
        $routeProvider.
            when('/login', {
                templateUrl: 'app/components/authentication/loginView.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            }).
            when('/signup', {
                templateUrl: 'app/components/authentication/signupView.html',
                controller: 'SignupController',
                controllerAs: 'vm'
            }).
            when('/shopkinsviewer', {
                templateUrl: 'app/components/viewshopkins/ShopkinsViewerView.html',
                controller: 'ShopkinsViewerController',
                controllerAs: 'vm'
            }).
            otherwise({
                templateUrl: 'app/components/home/homeView.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            });
    }


})();
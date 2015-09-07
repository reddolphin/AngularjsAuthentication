/**
 * Created by alex on 06/02/2015.
 */
(function(){

    function LoginController(){
        var vm = this;

        vm.message=function() {
            return 'This is LoginController screen';
        }

    }

    angular.module('ShopkinsApp').controller('LoginController', LoginController);

})();
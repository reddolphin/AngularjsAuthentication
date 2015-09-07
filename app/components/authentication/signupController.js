/**
 * Created by alex on 06/02/2015.
 */
(function (){
    function SignupController(){
        var vm = this;

        vm.message=function() {
            return 'This is SignupController screen';
        }

    }
    angular.module('ShopkinsApp').controller('SignupController', SignupController);
})();
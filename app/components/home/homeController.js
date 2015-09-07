/**
 * Created by alex on 06/02/2015.
 */
(function(){
     function HomeController(){
            var vm = this;

            vm.message=message();
            vm.title = 'Avengers';

            function message() {
                return 'This is Show orders screen';
            }
        }
     angular.module('ShopkinsApp').controller('HomeController',[HomeController]);
})();

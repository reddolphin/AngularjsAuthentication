/**
 * Created by alex on 21/02/2015.
 */
(function(){
    angular
        .module('ShopkinsApp')
        .controller('ShopkinsViewerController',ShopkinsViewerController);

    ShopkinsViewerController.$inject=['ShopkinsViewerService'];

    function ShopkinsViewerController(ShopkinsViewerService){
        var vm = this;

        vm.message=message();

        vm.show=ShopkinsViewerService.someValue;

        function message() {
            return 'This is Shopkins Viewer';
        }
    }

})();
/**
 * Created by alex on 21/02/2015.
 *
 * This service will communicate to shopkin site and return an object of shopkin items.
 *
 */
(function() {
    angular
        .module('ShopkinsApp')
        .factory('ShopkinsViewerService', ShopkinsViewerService);

    function ShopkinsViewerService() {
        var someValue = 'Test the value to show from a service';

        var service = {
            save: save,
            someValue: someValue,
            validate: validate
        };
        return service;

        ////////////

        function save() {
            /* */
        };

        function validate() {
            /* */
        };
    }
})();
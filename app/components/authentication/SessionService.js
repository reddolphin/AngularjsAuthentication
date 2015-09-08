/**
 * Created by alex on 07/09/2015.
 */
(function() {
    angular
        .module('ShopkinsApp')
        .factory('Session', Session);

    function Session() {
        this.create = function (sessionId, userId, userRole) {
            this.id = sessionId;
            this.userId = userId;
            this.userRole = userRole;
        };
        this.destroy = function () {
            this.id = null;
            this.userId = null;
            this.userRole = null;
        };
        return this;
    }
})();

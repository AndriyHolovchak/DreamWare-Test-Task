/**
 * Created by Andriy on 13.08.2016.
 */

(function() {
    'use strict';

    angular
            .module('dreamwareTestTask')
            .controller('DeleteController', DeleteController);

    /** @ngInject */
    function DeleteController($uibModalInstance) {
        var vm = this;
        vm.closeModal = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }
})();

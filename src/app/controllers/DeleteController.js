/**
 * Created by Andriy on 13.08.2016.
 */

(function() {
    'use strict';

    angular
            .module('dreamwareTestTask')
            .controller('DeleteController', DeleteController);

    /** @ngInject */
    function DeleteController($uibModalInstance, FakeAPIS, id, $state) {
        var vm = this;

        vm.closeModal = function() {
            $uibModalInstance.dismiss('cancel');
        };

        vm.remove = function() {
            FakeAPIS.deleteUserById(id, function(err, data) {
                if (!err) {
                    vm.closeModal();
                    $state.reload();
                }
            });
        }

    }
})();

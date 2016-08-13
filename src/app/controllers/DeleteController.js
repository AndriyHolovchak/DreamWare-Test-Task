/**
 * Created by Andriy on 13.08.2016.
 */

(function() {
    'use strict';

    angular
            .module('dreamwareTestTask')
            .controller('DeleteController', DeleteController);

    /** @ngInject */
    function DeleteController($uibModalInstance, FakeAPIS, id, $state, Logger) {
        var vm = this;

        vm.closeModal = function() {
            $uibModalInstance.dismiss('cancel');
        };

        vm.remove = function() {
            FakeAPIS.deleteUserById(id, function(err, data) {
                if (err) {
                    Logger.Error('Something happened with your deleting :(');
                } else {
                    Logger.Success('User has been deleted!');
                    vm.closeModal();
                    $state.reload();
                }
            });
        }

    }
})();

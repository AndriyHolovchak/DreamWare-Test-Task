/**
 * Created by Andriy on 13.08.2016.
 */

(function() {
    'use strict';

    angular
            .module('dreamwareTestTask')
            .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController($uibModal, FakeAPIS, Logger) {
        var vm = this;

        FakeAPIS.getAllUsers(function(err, data) {
            if (err) {
                Logger.Error('Something went wrong :(');
            } else {
                vm.users = data;
            }
        });
        
        vm.showDeleteModal = function(id) {
            return $uibModal.open({
                keyboard: false,
                animation: true,
                templateUrl: 'app/templates/modal-delete.html',
                controller: 'DeleteController',
                controllerAs: 'delete',
                resolve: {
                    id: function() {
                        return id;
                    }
                }
            });
        }
    }
})();

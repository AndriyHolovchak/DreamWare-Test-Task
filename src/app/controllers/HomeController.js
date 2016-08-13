/**
 * Created by Andriy on 13.08.2016.
 */

(function() {
    'use strict';

    angular
            .module('dreamwareTestTask')
            .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController($uibModal) {
        var vm = this;

        vm.users = [
            {
                login: 'Andriy',
                birthDate: '19.0282',
                registrationDate: 'bfdb43g',
                age: 22
            },
            {
                login: 'Andriy',
                birthDate: '19.0282',
                registrationDate: 'bfdb43g',
                age: 22
            }
        ];

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

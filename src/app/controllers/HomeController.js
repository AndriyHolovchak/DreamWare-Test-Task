/**
 * Created by Andriy on 13.08.2016.
 */

(function() {
    'use strict';

    angular
            .module('dreamwareTestTask')
            .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController($uibModal, FakeAPIS) {
        var vm = this;

        FakeAPIS.getAllUsers(function(err, data) {
            console.log(data);
            vm.users = data;
        });

        /*vm.users = [
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
        ];*/

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

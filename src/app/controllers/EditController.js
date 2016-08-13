/**
 * Created by Andriy on 13.08.2016.
 */

(function() {
    'use strict';

    angular
            .module('dreamwareTestTask')
            .controller('EditController', EditController);

    /** @ngInject */
    function EditController(FakeAPIS, $stateParams, CalculateAge) {
        var vm = this;
        vm.today = new Date();

        var id = $stateParams.id;

        FakeAPIS.getUserById(id, function(err, data){
            if (err) {
            } else {
                vm.user = angular.copy(data);
                vm.user.birthDate = new Date(vm.user.birthDate);
            }
        });

        vm.editUser = function(user) {
            user.age = CalculateAge(user.birthDate);
            FakeAPIS.editUser(user, function(err, date) {

            });
        }
    }
})();

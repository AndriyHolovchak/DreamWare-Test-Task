/**
 * Created by Andriy on 13.08.2016.
 */

(function() {
    'use strict';

    angular
            .module('dreamwareTestTask')
            .controller('EditController', EditController);

    /** @ngInject */
    function EditController(FakeAPIS, $stateParams, CalculateAge, Logger, $state) {
        var vm = this;
        vm.today = new Date();

        var id = $stateParams.id;

        FakeAPIS.getUserById(id, function(err, data){
            if (err) {
                Logger.Error('Can not find this user :(');
                $state.go('main.home');
            } else {
                vm.user = angular.copy(data);
                vm.user.birthDate = new Date(vm.user.birthDate);
            }
        });

        vm.editUser = function(user) {
            user.age = CalculateAge(user.birthDate);
            FakeAPIS.editUser(user, function(err, date) {
                if (err) {
                    Logger.Error('Something happened with your updating :(');
                } else {
                    $state.go('main.home');
                    Logger.Success('User has been edited!');
                }
            });
        }
    }
})();

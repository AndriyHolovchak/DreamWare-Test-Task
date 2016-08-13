/**
 * Created by Andriy on 13.08.2016.
 */

(function() {
    'use strict';

    angular
            .module('dreamwareTestTask')
            .controller('UploadController', UploadController);

    /** @ngInject */
    function UploadController(FakeAPIS, $state, CalculateAge, Logger) {
        var vm = this;vm.today = new Date();
        

        vm.addNewUser = function(user) {
            user.registrationDate = new Date();
            user.age = CalculateAge(user.birthDate);

            FakeAPIS.AddUser(user, function(err, data) {
                if(err) {
                    Logger.Error('Something happened with your uploading');
                } else {
                    Logger.Success('User has been created!');
                    $state.go('main.home');
                }
            });
        }
    }
})();

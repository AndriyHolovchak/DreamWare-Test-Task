/**
 * Created by Andriy on 13.08.2016.
 */

(function() {
    'use strict';

    angular
            .module('dreamwareTestTask')
            .controller('UploadController', UploadController);

    /** @ngInject */
    function UploadController(FakeAPIS, $state) {
        var vm = this;
        vm.today = new Date();

        vm.addNewUser = function(user) {
            user.registrationDate = new Date();
            user.age = calculateAge(user.birthDate);

            FakeAPIS.AddUser(user, function(err, data) {
                if(!err) {
                    $state.go('main.home');
                }
            });
        }

        function calculateAge(birthDate) {
            var age = (Date.now() - birthDate) / (1000 * 60 * 60 * 24 * 365);
            return parseFloat(Math.round(age * 10) / 10).toFixed(1);
        }
    }
})();

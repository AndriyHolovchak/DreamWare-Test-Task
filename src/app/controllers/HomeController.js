/**
 * Created by Andriy on 13.08.2016.
 */

(function() {
    'use strict';

    angular
            .module('dreamwareTestTask')
            .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController() {
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
    }
})();

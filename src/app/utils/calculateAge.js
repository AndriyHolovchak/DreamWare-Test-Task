/**
 * Created by Andriy on 13.08.2016.
 */

'use strict';
(function() {
    'use strict';

    angular
            .module('dreamwareTestTask')
            .factory('CalculateAge', CalculateAge);

    /** @ngInject */
    function CalculateAge() {

        function calculateAge(birthDate) {
            var age = (Date.now() - birthDate) / (1000 * 60 * 60 * 24 * 365);
            return parseFloat(Math.round(age * 10) / 10).toFixed(1);
        }

        return calculateAge;
    }
}());

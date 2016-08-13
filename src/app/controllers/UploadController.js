/**
 * Created by Andriy on 13.08.2016.
 */

(function() {
    'use strict';

    angular
            .module('dreamwareTestTask')
            .controller('UploadController', UploadController);

    /** @ngInject */
    function UploadController() {
        var vm = this;

        vm.today = new Date();
    }
})();

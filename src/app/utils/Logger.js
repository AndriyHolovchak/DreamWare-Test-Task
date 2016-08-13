/**
 * Created by Andriy on 13.08.2016.
 */

'use strict';
(function() {
    'use strict';

    angular
            .module('dreamwareTestTask')
            .factory('Logger', Logger);

    /** @ngInject */
    function Logger(Notification) {

        function Success(message) {
            Notification({ message: message }, 'success');
        }

        function Error(message) {
            Notification({ message: message }, 'error');
        }

        function Warning(message) {
            Notification({ message: message }, 'warning');
        }

        return {
            Success: Success,
            Error: Error,
            Warning: Warning
        }
    }
}());

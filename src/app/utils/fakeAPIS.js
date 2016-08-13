/**
 * Created by Andriy on 13.08.2016.
 */

'use strict';
(function() {
    'use strict';

    angular
            .module('dreamwareTestTask')
            .factory('FakeAPIS', FakeAPIS);

    /** @ngInject */
    function FakeAPIS(uuid2) {
        function AddUser(body, callback) {
            body.id = uuid2.newuuid();
            var successObj = {
                status: 201,
                data: body
            }
            callback(null, successObj);
        }

        /*function getAllBooks(params) {
            return $http.get(API_ROOT_URL + 'books' + params);
        }*/

        return {
            AddUser: AddUser
        }
    }
}());

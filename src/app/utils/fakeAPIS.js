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
    function FakeAPIS(uuid2, $localStorage) {

        function AddUser(body, callback) {

            $localStorage.Users = $localStorage.Users || [];
            body.id = uuid2.newuuid();
            $localStorage.Users.push(body);

            var successObj = {
                status: 201,
                data: body
            }
            return callback(null, successObj);
        }


        function getAllUsers(callback) {
            var users = $localStorage.Users || [];
            return callback(null, users);
        }

        return {
            AddUser: AddUser,
            getAllUsers: getAllUsers
        }
    }
}());
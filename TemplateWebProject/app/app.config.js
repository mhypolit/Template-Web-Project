(function () {
    'use strict'

    // Site-wide configuration
    angular.module('app')
        .constant('appSettings', {
            apiUrl: 'http://localhost:62237/api'
        });
})();
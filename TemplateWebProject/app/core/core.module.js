(function () {
    'use strict;'

    // Handles shared/common services and dependencies across the site
    angular.module('app.core', [
        // Angular modules

        // Custom Common modules
        'ui.router', 'ngMessages', 'ngResource',

        // Feature modules
        'blocks.router'

        // 3rd Party modules
    ]);
})();
(function () {
    'use strict';

    // Handles events view by calling whatever services
    // it needs to get data such as the dataContext

    angular
        .module('app.events')
        .controller('EventDetailsCtrl', EventDetailsCtrl);

    EventDetailsCtrl.$inject = ['dataContext', 'event'];

    function EventDetailsCtrl(dataContext, event) {
        var vm = this;
        vm.event = event;
    }
})();
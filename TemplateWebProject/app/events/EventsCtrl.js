(function () {
    'use strict';

    // Handles events related views by calling whatever services
    // it needs to get data such as the dataContext

    angular
        .module('app.events')
        .controller('EventsCtrl', EventsCtrl);

    EventsCtrl.$inject = ['dataContext', '$scope'];

    function EventsCtrl(dataContext, $scope) {
        var vm = this;
        vm.events = [];
        $scope.message = ""

        activate();

        function activate() {

        //Code below get API data
            //return getEvents();
        }

        function getEvents() {
            return dataContext.events.getAll().$promise
                .then(function (data) {
                    console.log("getting events from dataContext.");
                    vm.events = data;
                    return data;
                })
                .catch(function (error) {
                    console.log("Error getting list of events", error);
                    $scope.message = "Sorry, there was an error retrieving a list of events.";
                });
        }
    }
})();
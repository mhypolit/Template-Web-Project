(function () {
    'use strict';

    // Handles routing associated with event related views

    // TODO: eventDetails controller will not activate until an event is fetch.
    // Of there is an error fetching event, route should be cancelled
    // display error in current view

    angular
        .module('app.events')
        .run(appRun);

    appRun.$inject = ['routerHelper', 'dataContext', '$stateParams'];

    function appRun(routerHelper, dataContext) {
        routerHelper.configureStates(getStates(dataContext));
    }

    function getStates(dataContext, $stateParams) {
        return [
            {
                state: 'events',
                config: {
                    url: '/events',
                    templateUrl: 'app/events/events.html',
                    controller: 'EventsCtrl',
                    controllerAs: 'vm',
                    title: 'Events',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Events'
                    }
                }
            },

            {
                state: 'eventDetails',
                config: {
                    url: '/details/:id',
                    templateUrl: 'app/events/eventDetails.html',
                    controller: 'EventDetailsCtrl',
                    controllerAs: 'vm',
                    title: 'Event Details',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Event Details'
                    },
                    resolve: {
                        dataContext: "dataContext",
                        event: event
                    }
                }
            }
        ];
    }

    function event(dataContext, $stateParams) {
        return dataContext.events.getById($stateParams.id).$promise;
    }
})();
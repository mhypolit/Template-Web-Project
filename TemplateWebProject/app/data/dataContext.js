(function () {
    'use strict';

    // TODO: Set up API calls in data.repositories and replace hardcoded data

    angular
        .module('app.data')
        .factory('dataContext', dataContext);

    dataContext.$inject = ['$resource'];

    function dataContext($resource) {
        // Set up call to events API
        var Events = $resource('http://localhost:62237/api/events/:id/', { id: '@id' });

        return {
            events: {
                getAll: getAll,
                getById: getEvent
            }
        }

        ////////////

        function getAll() {

            // Call to API 
            var events = Events.query(function () {
                console.log("Events from api call", events);
            });

            return events;
        }

        function getEvent(id) {

            var event = Events.get({ id: id }, function () {
                console.log("Single event from api call", event);
            });

            return event;
        }
    }
})();
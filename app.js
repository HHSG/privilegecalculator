
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes 
// =============================================================================
.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })

        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.category1', {
            url: '/category1',
            templateUrl: 'form-category1.html'
        })

        // url will be /form/interests
        .state('form.category2', {
            url: '/category2',
            templateUrl: 'form-category2.html'
        })

        // url will be /form/payment
        .state('form.category3', {
            url: '/category3',
            templateUrl: 'form-category3.html'
        });

    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/category1');
})

// our controller for the form
// =============================================================================
.controller('formController', function ($scope) {

    // we will store all of our form data in this object
    $scope.formData = {};

    // function to process the form
    $scope.processForm = function () {
        alert('awesome!');
    };

});


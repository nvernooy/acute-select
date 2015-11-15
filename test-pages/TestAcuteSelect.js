/// <reference path="../lib/angular.1.2.6.js" />

"use strict";

angular.module("acuteSelectTest", ["acute.select"])
.controller("MainCtrl", function ($scope, $http, $filter, $window, $timeout, safeApply) {

    $scope.textItems = ['Square', 'Circle', 'Triangle', 'Pentagon', 'Hexagon'];

    $scope.colours = [
      { name: 'black', shade: 'dark' },
      { name: 'white', shade: 'light' },
      { name: 'red', shade: 'dark' },
      { name: 'blue', shade: 'dark' },
      { name: 'yellow', shade: 'light' }
    ];

    $scope.things = [];
    $scope.selectedThing = null;
    $scope.serverItems = [];

    $scope.message = "Ready.";

    $scope.selectedColour = $scope.colours[2]; // red.

    $scope.loadSection = function () {
        var colourName = $scope.filters.selectedColour ? $scope.filters.selectedColour : "none";
        $scope.message = "ac-change event fired for colour. New colour: " + colourName;
    }

    $scope.clearFilters = function(){
        $scope.filters = {};
    }

});

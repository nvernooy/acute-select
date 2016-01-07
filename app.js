"use strict";

angular.module("acuteSelectTest", ["acute.select"])
.controller("MainCtrl", function ($scope, $http, $filter, $window, $timeout, safeApply) {
    $scope.colours = [
      { name: 'Black', shade: 'dark' },
      { name: 'White', shade: 'light' },
      { name: 'Red', shade: 'dark' },
      { name: 'Blue', shade: 'dark' },
      { name: 'Yellow', shade: 'light' }
    ];

    $scope.things = [];
    $scope.selectedThing = null;
    $scope.serverItems = [];

    $scope.message = "Ready.";
    $scope.dropdownItems = "Colours"

    $scope.loadSection = function () {
        var colourName = $scope.filters.selectedColour ?
                            $scope.filters.selectedColour.name : 'none';
        $scope.message = "Change event fired for colour. New colour is " + colourName;
    }

    $scope.clearFilters = function(){
        $scope.filters = {};
    }

});

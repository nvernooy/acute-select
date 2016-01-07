/// <reference path="../lib/angular.1.2.6.js" />

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
      var colourName = 'none';
        if ($scope.filters.selectedColour){
          for (var i in $scope.colours){
            if ($scope.filters.selectedColour === $scope.colours[i].shade){
              colourName = $scope.colours[i].name;
              break;
            }
          }
        }
        $scope.message = "ac-change event fired for colour. New colour is " + colourName;
    }

    $scope.clearFilters = function(){
        $scope.filters = {};
    }

});

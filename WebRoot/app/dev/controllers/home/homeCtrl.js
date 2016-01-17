define([], function(){
  "use strict";
  var config = ["$scope", function($scope){

  }];
  var devModule = angular.module("devModule", []);
  devModule.service('homeCtrl', config);
});

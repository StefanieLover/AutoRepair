define([], function(){
  "use strict";
  var config = ["$scope", function($scope){
    console.info('........');
  }];
  var devModule = angular.module(MODULE_NAME);
  devModule.controller('homeCtrl', config);
});

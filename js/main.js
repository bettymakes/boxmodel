var app = angular.module('boxmodelApp', []);

app.controller('BoxmodelCtrl', function($scope){
    $scope.testing = "hello there. I'm angular";
    console.log('fired');
});
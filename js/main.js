var app = angular.module('boxmodelApp', []);

app.controller('BoxmodelCtrl', function($scope){
    $scope.prop = {
        elementWidth: 400,
        elementHeight: 200,
        paddingTop: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingLeft: 20
    };
});
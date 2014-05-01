var app = angular.module('boxmodelApp', ['ui.bootstrap']);

app.controller('BoxmodelCtrl', function($scope){
    $scope.prop = {
        elementWidth: 400,
        elementHeight: 200,
        paddingTop: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        borderTop: 20,
        borderRight: 20,
        borderBottom: 20,
        borderLeft: 20,
        marginTop: 20,
        marginRight: 20,
        marginBottom: 20,
        marginLeft: 20
    };
    $scope.setDefault = function(){
        $scope.prop = {
            elementWidth: 400,
            elementHeight: 200,
            paddingTop: 20,
            paddingRight: 20,
            paddingBottom: 20,
            paddingLeft: 20,
            borderTop: 20,
            borderRight: 20,
            borderBottom: 20,
            borderLeft: 20,
            marginTop: 20,
            marginRight: 20,
            marginBottom: 20,
            marginLeft: 20
        };
    };

    $scope.boxSizingModel = false;
    $scope.popUp = {state: false};

    $scope.toggleState = function(obj){
        console.log('before', obj.state);
        obj.state = !obj.state;
        console.log('fired!', obj.state);
    };
});
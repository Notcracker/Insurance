angular.module('taskApp', ['ui.router','ngResource','ui.utils.masks'])


    .controller('taskController', ['$scope', function($scope) {

        $scope.vehiclesObj = {
            'AUDI A4': 1.5, 
            'AUDI A5': 1.5,
            'AUDI A6': 1.9,
            'AUDI A7': 0.2,
            'AUDI A8': 1.9,
            'BMW X1': 1.9,
            'BMW X2': 1.795,
            'BMW X3': 1.02,
            'BMW X4': 1.98,
            'BMW X5': 1.89,
            'BMW X6': 1.009
        };

        $scope.agesObj = {
            '18-30': 1.5,
            '31-45': 1.06,
            '46-90': 2.5
        };

        $scope.experienceObj = {
            '0-2': 2.5,
            '3-5': 0.6,
            '6-90': 0.1
        };

        $scope.vehicles = Object.keys($scope.vehiclesObj);
        $scope.ages = Object.keys($scope.agesObj);
        $scope.experience = Object.keys($scope.experienceObj);
        $scope.selectedName = '';
        $scope.selectedAge = '';
        $scope.selectedExperience = '';
        $scope.insurance = '';

        $scope.calculate = function () {
            $scope.value = ($scope.vehiclesObj[$scope.selectedName] 
            * $scope.agesObj[$scope.selectedAge] 
            * $scope.experienceObj[$scope.selectedExperience] 
            * $scope.insurance).toFixed(2);
        };
          
    }]);
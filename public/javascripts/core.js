var worldCup = angular.module('worldCup', []);

function mainController($scope, $http) {
  $scope.formData = {};
  // when landing on the page, get all todos and show them
  $http.get('/players?limit=250')
    .success(function(data) {
      $scope.players = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
}
(function () {
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchMenu = "";
    $scope.message = "";

    $scope.checkMenu = function () {
      if ($scope.lunchMenu) {
        var numItems = $scope.lunchMenu.split(',').length;
        $scope.message = (numItems <= 3) ? "Enjoy!" : "Too much!";
      } else {
        $scope.message = "Please enter data first"
      }
    }
  }
})();

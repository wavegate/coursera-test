(function () {
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchMenu = "";
    $scope.message = "";

    $scope.checkMenu = function () {
      if ($scope.lunchMenu) {
        $scope.messageStyle = {color: "green"};
        $scope.menuStyle = {border: "1px solid green"};
        var numItems = $scope.lunchMenu.split(',').
          filter(function (entry) { return entry.trim() != '';}).length;
        $scope.message = (numItems <= 3) ? "Enjoy!" : "Too much!";
      } else {
        $scope.messageStyle = {color: "red"};
        $scope.menuStyle = {border: "1px solid red"};
        $scope.message = "Please enter data first"
      }
    }
  }
})();

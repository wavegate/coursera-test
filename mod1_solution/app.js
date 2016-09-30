(function () {
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchMenu = "";
    $scope.message = "";

    $scope.checkMenu = function () {
      var message = document.getElementById('message');
      var textBox = document.getElementById('lunch-menu');
      if ($scope.lunchMenu) {
        message.style.color = "green";
        textBox.style.border = "1px solid green";
        var numItems = $scope.lunchMenu.split(',').
          filter(function (entry) { return entry.trim() != '';}).length;
        $scope.message = (numItems <= 3) ? "Enjoy!" : "Too much!";
      } else {
        message.style.color = "red";
        textBox.style.border = "1px solid red";
        $scope.message = "Please enter data first"
      }
    }
  }
})();

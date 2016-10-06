(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.message = "";

  $scope.displayResult = function() {
    countLunchItems();
  };

  $scope.outputStyle={color:'black'};

  function countLunchItems(){

    var arrayInput = $scope.lunchMenu.split(",");


    if(($scope.lunchMenu == "")){
      $scope.message = "Please enter data first";
    }
    else if(arrayInput.length<=3){
      $scope.message ="Enjoy!";
    }else{
        $scope.message = "Too much!";
    }
  }



}

})();

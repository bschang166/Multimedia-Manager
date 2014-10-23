angular.module("dropdownMenu", [])
  .directive("dropdownMenu", function () {

    return {

      scope: {
        buttonLabel: "@",
        menuMap: "=",

      },
      restrict: "E",
      templateUrl: "components/dropdownMenu/dropdownView.html",
      controller: function ($scope) {

        $scope.status = {
          isOpen: false
        };

      }
    };

  })
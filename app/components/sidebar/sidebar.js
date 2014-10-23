angular.module("sidebar", [])
  .directive("sidebar", function () {

    return {
      restrict: "EA",
      templateUrl: "components/sidebar/sidebarView.html",
      scope: {},
      controller: function ($scope) {

        $scope.sidebarClassMap = {
          open: "",
          show: ""
        };

        $scope.isSidebarOpen = false;

        $scope.getSliderOffset = function () {
          return $scope.isSidebarOpen ? "col-md-offset-1" : "";
        }

        $scope.toggleSidebar = function () {
          var map = $scope.sidebarClassMap;

          $scope.isSidebarOpen = !($scope.isSidebarOpen);
          $scope.isSidebarOpen ?
            (map.open = "open", map.show = "show") :
            (map.open = "", map.show = "");
        }
      }
    };

  })
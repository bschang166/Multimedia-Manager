angular.module("mainApp")
  .controller("searchCtrl", function ($scope, $modal, searchModel) {

    $scope.searchModel = searchModel;
    $scope.status = searchModel.getSearchStatus();

    $scope.listHeaders = ["trackName", "artistName", "kind", "trackTime"];

    $scope.setSearchOrder = function (order) {
      if ($scope.status.searchOrder === order) {
        $scope.status.searchReverse = !$scope.status.searchReverse;
      }
      $scope.status.searchOrder = order;

    }
    $scope.getActiveHeader = function (header) {
      return ($scope.status.searchOrder === header) ? "btn-info" : "";
    }
    $scope.getOrderIcon = function () {
      return $scope.status.searchReverse ?
        "glyphicon glyphicon-arrow-up" : "glyphicon glyphicon-arrow-down";
    }

    $scope.openPreviewModal = function (searchObj) {
      var modalInstance = $modal.open({
        templateUrl: 'views/modal/searchPreview.html',
        controller: "previewModalCtrl",
        resolve: {
          searchObj: function () {
            return searchObj;
          }
        },
        size: 'lg'
      });
    }
  });

function previewModalCtrl ($scope, $modalInstance, searchObj){
  $scope.search = searchObj;
  $scope.url = searchObj.previewUrl;
  console.log($scope.searchUrl);

  $scope.closeModal = function(){
    $modalInstance.dismiss('cancel');
  }

    
  // player seekbar time?
}
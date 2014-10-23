angular.module("mainApp")
  .controller("homeCtrl", function ($scope, homeModel) {

    var
      feedCustomTags =
        ["im:contentType", "im:duration", "im:artist", "im:price", "im:image", "im:releaseDate", "im:collection"];

    $scope.homeModel = homeModel;

    $scope.feedListItems = [
        { name: "topAlbum", src: "https://itunes.apple.com/us/rss/topalbums/limit=10/xml" },
        { name: "topSong", src: "https://itunes.apple.com/us/rss/topsongs/limit=10/xml" }
    ];
    $scope.status = {
      isOpen: false
    };

    $scope.loadFeed = function (item) {
      homeModel.loadFeed(item, feedCustomTags);
      $scope.status.isOpen = !($scope.status.isOpen);
    }


    $scope.showDialog = false;

    $scope.getImgHtml = function (imgUrl) {
      return '<img src="' + imgUrl + '" />';
    }
  })
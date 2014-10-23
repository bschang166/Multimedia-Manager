angular.module("mainApp")
  .constant("searchResourceUrl", "https://itunes.apple.com/")
  .factory("searchResource", function ($resource, searchResourceUrl, $filter) {

    return $resource(searchResourceUrl + ":action",
      { callback: "JSON_CALLBACK" },
      {
        get: {
          method: "JSONP",
          transformResponse: function (data) {
            angular.forEach(data.results, function (item) {
              item.trackTime = $filter("msToMin")(item['trackTimeMillis'], 2);
            });
            return data;
          }
        }
      
    });
  })
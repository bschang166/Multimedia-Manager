angular.module("mainApp")
  .factory("searchModel", function (searchResource) {

    var
      searchData,
      searchTerm,
      searchOrder,
      searchReverse,
      searchFilter,
      searchStatus = {
        searchTerm: searchTerm,
        searchOrder: searchOrder,
        searchReverse: searchReverse,
        searchFilter: searchFilter
      };

    return {

      getSearchData: function () {
        return searchData;
      },

      getSearchStatus: function(){
        return searchStatus;
      },

      search: function (sTerm, sMediaType) {
        searchResource.get({
          action: "search",
          term: sTerm,
          media: sMediaType
        })
          .$promise.then(function (data) {
            searchData = data;
            searchTerm = sTerm;

          });
      }

    };

  });
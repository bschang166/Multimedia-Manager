angular.module("mainApp")
  .factory("homeModel", function ( $log, feedService, utilityService ) {

    var feedData = [],
        currentFeedItem;

    return {

      getFeedData: function (start, end) {
        if (angular.isNumber(start) && angular.isNumber(end)) {
          return feedData.slice(start, end);
        }
        if (angular.isNumber(start)) {
          return feedData.slice(0, start);
        }
        return feedData;
      },
      getCurrentItem: function () {
        return currentFeedItem;
      },
      loadFeed: function (feedItem, customFeedTags) {
        feedService.parseFeed(feedItem.src)
          .then(function (res) {
            feedData = res.data.responseData.feed.entries;
            currentFeedItem = feedItem;

            if (customFeedTags) {
              var xmlData,
                  feedCopy;

              feedCopy = angular.copy(feedData);
              xmlData = utilityService.parseXmlByTags(res.data.responseData.xmlString, customFeedTags);

              try {
                angular.forEach(feedData, function (entry, i) {
                  angular.extend(entry, xmlData.entries[i]);
                });
              }
              catch (err) {
                $log.error(err);
                feedData = feedCopy;
              }
            }
          });
      }
    };
  })
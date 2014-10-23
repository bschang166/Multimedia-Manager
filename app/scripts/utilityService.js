angular.module("mainApp")
  .factory("utilityService", function () {

    var parseXmlByTags;
    

    // return: [object Object] containing
    //   - entries : array of entry object with specified tag key and value
    //   - tags    : tags used for xml parsing
    //   Note that if passed tags argument is not array or object
    //     the xmlString passed to the function is returned as it is
    parseXmlByTags = function (xmlStr, tags) {
      var
          elem,
          numberOfEntry,
          jqTagSet,
          tag,
          resultMap = {
            entries: [],
            tags: []
          }
      ;
           
      if (angular.isArray(tags) || angular.isObject(tags)) {
        resultMap.tags = tags;

        elem = angular.element("<div>");
        elem.html(xmlStr);

        numberOfEntry = elem.find("entry").length;

        for (var key in tags) {
          if (tags.hasOwnProperty(key)) {
            tag = tags[key];
            jqTagSet = elem.find(tag);
          }

          for (var i = 0, n = jqTagSet.length; i < n; i++) {
            var
                intermediate = {},
                currentResultObj = resultMap.entries[i],
                setFactor = 1,
                ind = i;;

            intermediate[tag] = jqTagSet.eq(i).text();

            if (n > numberOfEntry) {
              intermediate[tag] = [];
              setFactor = jqTagSet.length / numberOfEntry;
              ind *= setFactor;

              var count = 0;
              while (count < setFactor) {
                intermediate[tag].push(jqTagSet.eq(ind + count).text());
                count++;
              }
            }

            if (angular.isUndefined(currentResultObj)) {
              resultMap.entries[i] = intermediate;
              
            }
            else {
              angular.extend(currentResultObj, intermediate);

            }
          }
        }
      }
      else {
        resultMap = xmlStr;
      }

      return resultMap;
    }

    return {
      parseXmlByTags : parseXmlByTags
    };

  })
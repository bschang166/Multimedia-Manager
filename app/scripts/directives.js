angular.module("mainApp")
  .directive("modalDialog", function () {

    return {
      restrict: "E",
      scope: {
        show: "="
      },
      replace: true,
      transclude: true,
      link: function (scope, elem, attrs) {
        scope.dialogStyle = {};

        if (attrs["width"]) {
          scope.dialogStyle.width = attrs["width"];
        }
        if (attrs["height"]) {
          scope.dialogStyle.height = attrs["height"];
        }

        scope.closeDialog = function () {
          scope.show = false;
        }
      },
      templateUrl: "directives/modalDialog/dialog.html"
    }
  })
  .directive("mediaLoader", function () {

    return {
      restrict: "A",
      link: function (scope, element, attrs) {
        var sourceElem = angular.element("<source>");
        sourceElem.attr("src", scope.url);
        element.append(sourceElem);

      }
    };

  });
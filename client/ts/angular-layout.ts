/// <reference path="d.ts/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="d.ts/DefinitelyTyped/jquery/jquery.d.ts" />

module ng.layout {

  class FlexDirective implements ng.IDirective {
    restrict = "A";
    link(scope, el:JQuery, attrs) {
      console.log("Flex attribute found");
      el.css("-webkit-flex", attrs.flex);
    }

    static factory():FlexDirective {
      return new FlexDirective();
    }
  }


  class VBoxDirective implements ng.IDirective {
    restrict = "E";
    link(scope, el:JQuery, attrs) {
      el.addClass("vbox");
    }

    static factory():VBoxDirective {
      return new VBoxDirective();
    }
  }

  class HBoxDirective implements ng.IDirective {
    restrict = "E";
    link(scope, el:JQuery, attrs) {
      el.addClass("hbox");
    }

    static factory():HBoxDirective {
      return new HBoxDirective();
    }
  }

  class LayoutDirective implements ng.IDirective {
    restrict = "A";
    link(scope, el:JQuery, attrs:any) {
      el.addClass(attrs.layout.toString());
    }

    static factory():LayoutDirective {
      return new LayoutDirective();
    }
  }

  class ScrollableDirective implements ng.IDirective {

    restrict = "A";
    template = [
      '<div class="scroll-viewport">',
      '  <div ng-transclude></div>',
      '</div>'
    ].join('');
    transclude = true;
    controller = ['$scope', function($scope) {
      $scope.viewportLayout = null;
      return {
        setViewportLayout: function(layout) {
          $scope.viewportLayout = layout;
          console.log("setting viewport layout to ", layout);
        }
      };
    }];
    link = function(scope, el, attrs) {
      console.log("Running scrollable linking function");
      //if (attrs.scrollable == "true") {
      el.bind("touchmove", function(e) {
        e.stopImmediatePropagation();
      });
      el.addClass("scrollbox");

      scope.$watch("viewportLayout", function(layout) {
        console.log("viewportLayout changed to", layout);
        if (layout != null) {
          el.find("scroll-viewport").addClass(layout);
        }
      });
      console.log("hbox in link", scope);
      //el.css("-webkit-flex", "1 1 auto");
      //el.css("overflow", "auto");
      //el.css("min-height", "100px");
      //}
    };

    static factory():ScrollableDirective {
      return new ScrollableDirective();
    }
  }

  function init():ng.IModule {
    var layout = angular.module("ng.layout", []);

    layout.directive("flex", FlexDirective.factory);
    layout.directive("vbox", VBoxDirective.factory);
    layout.directive("hbox", HBoxDirective.factory);
    layout.directive("layout", LayoutDirective.factory);
    layout.directive("scrollable", ScrollableDirective.factory);

    return layout;
  }

  init();
}
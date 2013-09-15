/// <reference path="../../tsd/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="../../tsd/DefinitelyTyped/jquery/jquery.d.ts" />
/// <reference path="../../tsd/DefinitelyTyped/underscore/underscore.d.ts" />

module ng.layout {

  function VBox():ng.IDirective {
    return {
      restrict: "E",
      link: (scope:ng.IScope, el:JQuery, attrs:Object) => el.addClass("vbox")
    }
  }

  function HBox():ng.IDirective {
    return {
      restrict: "E",
      link: (scope:ng.IScope, el:JQuery, attrs:Object) => el.addClass("hbox")
    }
  }

  function Layout():ng.IDirective {
    return {
      restrict: "E",
      link: function(scope:ng.IScope, el:JQuery, attrs:Object) {

        if (_.contains(["hbox", "vbox"], attrs["layout"])) {
          el.addClass(attrs["layout"].toString());
        }
      }
    }
  }

  function PaddingFactory(side:string) {
    var paddingSide = "padding" + side.substr(0, 1).toUpperCase() + side.substr(1).toLowerCase();

    return function():ng.IDirective {
      return {
        restrict: "A",
        link: function(scope:ng.IScope, el:JQuery, attrs:Object) {
          el.css(paddingSide, attrs[paddingSide]);
        }
      };
    };
  }

  function Scrollable():ng.IDirective {
    return {
      restrict: "A",
      template: [
        '<div class="scroll-viewport">',
        '  <div ng-transclude></div>',
        '</div>'
      ].join(''),
      transclude: true,
      /*
      controller: ['$scope', function($scope:ng.IScope) {
        $scope.viewportLayout = null;
        return {
          setViewportLayout: function(layout) {
            $scope.viewportLayout = layout;
            console.log("setting viewport layout to ", layout);
          }
        };
      }],
      */
      link: function(scope:ng.IScope, el:JQuery, attrs:Object) {
        console.log("Running scrollable linking function");
        //if (attrs.scrollable == "true") {
        el.bind("touchmove", function(e) {
          e.stopImmediatePropagation();
        });
        el.addClass("scrollbox");

        /*
        scope.$watch("viewportLayout", function(layout) {
          console.log("viewportLayout changed to", layout);
          if (layout != null) {
            el.find("scroll-viewport").addClass(layout);
          }
        });
        */
      }
    }
  }


  function init():ng.IModule {
    var layout:ng.IModule = angular.module("ng.layout", []);


    layout.directive("paddingLeft", PaddingFactory("left"));
    layout.directive("paddingRight", PaddingFactory("right"));
    layout.directive("paddingTop", PaddingFactory("top"));
    layout.directive("paddingBottom", PaddingFactory("bottom"));
    layout.directive("hbox", HBox);
    layout.directive("vbox", VBox);
    layout.directive("layout", Layout);
    layout.directive("scrollable", Scrollable);

    return layout;
  }

  init();
}
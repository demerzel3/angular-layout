/// <reference path="../../tsd/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="../../tsd/DefinitelyTyped/jquery/jquery.d.ts" />

module ng.layout {

  function BoxFactory(layoutName:string) {
    return function():ng.IDirective {
      return {
        restrict: "E",
        template: [
          '<div>',
          '  <div ng-if="debug==\'true\'" class="debug-info">',
          '    {{layout}}',
          '    <span ng-if="pack">pack={{pack}}</span>',
          '    <span ng-if="!pack">pack=start</span>',
          '    <span ng-if="alignItems">align-items={{alignItems}}</span>',
          '    <span ng-if="!alignItems">align-items=stretch</span>',
          '    <span ng-if="gap">gap={{gap}}</span>',
          '    <span ng-if="!gap">gap=8px</span>',
          '  </div>',
          '</div>'
        ].join(''),
        transclude: true,
        replace: true,
        scope: {
          debug: '@',
          pack: '@',
          alignItems: '@',
          gap: '@'
        },

        controller: ['$scope', '$element', '$transclude', function($scope:any, $element:JQuery, $transclude:Function) {
          // The custom transclude is necessary to not mess with scopes:
          // the template gets linked in the directive scope (so it gets access to the layout info)
          // whilst the transcluded elements are linked to the outer scope.
          $transclude(function(clone:JQuery) {
            $element.append(clone);
          });
        }],

        link: function(scope:any, el:JQuery, attrs:any) {
          el.addClass(layoutName);
          scope.layout = layoutName;
        }
      }
    };
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
    layout.directive("hbox", BoxFactory("hbox"));
    layout.directive("vbox", BoxFactory("vbox"));
    layout.directive("scrollable", Scrollable);

    return layout;
  }

  init();
}
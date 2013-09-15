/**
 * angular-layout - v0.0.1 - 2013-09-15
 * https://github.com/demerzel3/angular-layout
 *
 * Copyright (c) 2013 Gabriele Genta
 * Licensed MIT <>
 */
var ng;
(function (ng) {
    (function (layout) {
        function VBox() {
            return {
                restrict: "E",
                link: function (scope, el, attrs) {
                    return el.addClass("vbox");
                }
            };
        }

        function HBox() {
            return {
                restrict: "E",
                link: function (scope, el, attrs) {
                    return el.addClass("hbox");
                }
            };
        }

        function Layout() {
            return {
                restrict: "E",
                link: function (scope, el, attrs) {
                    if (_.contains(["hbox", "vbox"], attrs["layout"])) {
                        el.addClass(attrs["layout"].toString());
                    }
                }
            };
        }

        function PaddingFactory(side) {
            var paddingSide = "padding" + side.substr(0, 1).toUpperCase() + side.substr(1).toLowerCase();

            return function () {
                return {
                    restrict: "A",
                    link: function (scope, el, attrs) {
                        el.css(paddingSide, attrs[paddingSide]);
                    }
                };
            };
        }

        function Scrollable() {
            return {
                restrict: "A",
                template: [
                    '<div class="scroll-viewport">',
                    '  <div ng-transclude></div>',
                    '</div>'
                ].join(''),
                transclude: true,
                link: function (scope, el, attrs) {
                    console.log("Running scrollable linking function");

                    el.bind("touchmove", function (e) {
                        e.stopImmediatePropagation();
                    });
                    el.addClass("scrollbox");
                }
            };
        }

        function init() {
            var layout = angular.module("ng.layout", []);

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
    })(ng.layout || (ng.layout = {}));
    var layout = ng.layout;
})(ng || (ng = {}));

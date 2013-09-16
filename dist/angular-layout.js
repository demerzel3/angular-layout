/**
 * angular-layout - v0.0.1 - 2013-09-16
 * https://github.com/demerzel3/angular-layout
 *
 * Copyright (c) 2013 Gabriele Genta
 * Licensed MIT <>
 */
var ng;
(function (ng) {
    (function (layout) {
        function BoxFactory(layoutName) {
            return function () {
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
                    controller: [
                        '$scope',
                        '$element',
                        '$transclude',
                        function ($scope, $element, $transclude) {
                            $transclude(function (clone) {
                                $element.append(clone);
                            });
                        }
                    ],
                    link: function (scope, el, attrs) {
                        el.addClass(layoutName);
                        scope.layout = layoutName;
                    }
                };
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
            layout.directive("hbox", BoxFactory("hbox"));
            layout.directive("vbox", BoxFactory("vbox"));
            layout.directive("scrollable", Scrollable);

            return layout;
        }

        init();
    })(ng.layout || (ng.layout = {}));
    var layout = ng.layout;
})(ng || (ng = {}));

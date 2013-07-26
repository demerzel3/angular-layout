var ng;
(function (ng) {
    (function (layout) {
        var FlexDirective = (function () {
            function FlexDirective() {
                this.restrict = "A";
            }
            FlexDirective.prototype.link = function (scope, el, attrs) {
                el.css("-webkit-flex", attrs.flex);
            };

            FlexDirective.factory = function () {
                return new FlexDirective();
            };
            return FlexDirective;
        })();

        var VBoxDirective = (function () {
            function VBoxDirective() {
                this.restrict = "E";
            }
            VBoxDirective.prototype.link = function (scope, el, attrs) {
                el.addClass("vbox");
            };

            VBoxDirective.factory = function () {
                return new VBoxDirective();
            };
            return VBoxDirective;
        })();

        var HBoxDirective = (function () {
            function HBoxDirective() {
                this.restrict = "E";
            }
            HBoxDirective.prototype.link = function (scope, el, attrs) {
                el.addClass("hbox");
            };

            HBoxDirective.factory = function () {
                return new HBoxDirective();
            };
            return HBoxDirective;
        })();

        var LayoutDirective = (function () {
            function LayoutDirective() {
                this.restrict = "A";
            }
            LayoutDirective.prototype.link = function (scope, el, attrs) {
                el.addClass(attrs.layout.toString());
            };

            LayoutDirective.factory = function () {
                return new LayoutDirective();
            };
            return LayoutDirective;
        })();

        var ScrollableDirective = (function () {
            function ScrollableDirective() {
                this.restrict = "A";
                this.template = [
                    '<div class="scroll-viewport">',
                    '  <div ng-transclude></div>',
                    '</div>'
                ].join('');
                this.transclude = true;
                this.controller = [
                    '$scope',
                    function ($scope) {
                        $scope.viewportLayout = null;
                        return {
                            setViewportLayout: function (layout) {
                                $scope.viewportLayout = layout;
                                console.log("setting viewport layout to ", layout);
                            }
                        };
                    }
                ];
                this.link = function (scope, el, attrs) {
                    console.log("Running scrollable linking function");

                    el.bind("touchmove", function (e) {
                        e.stopImmediatePropagation();
                    });
                    el.addClass("scrollbox");

                    scope.$watch("viewportLayout", function (layout) {
                        console.log("viewportLayout changed to", layout);
                        if (layout != null) {
                            el.find("scroll-viewport").addClass(layout);
                        }
                    });
                    console.log("hbox in link", scope);
                };
            }
            ScrollableDirective.factory = function () {
                return new ScrollableDirective();
            };
            return ScrollableDirective;
        })();

        function init() {
            var layout = angular.module("ng.layout", []);

            layout.directive("flex", FlexDirective.factory);
            layout.directive("vbox", VBoxDirective.factory);
            layout.directive("hbox", HBoxDirective.factory);
            layout.directive("layout", LayoutDirective.factory);
            layout.directive("scrollable", ScrollableDirective.factory);

            return layout;
        }

        init();
    })(ng.layout || (ng.layout = {}));
    var layout = ng.layout;
})(ng || (ng = {}));
//@ sourceMappingURL=angular-layout.js.map

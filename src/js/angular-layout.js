(function () {
    'use strict';
    var angularLayoutModule = angular.module("angular-layout", []);

    angularLayoutModule.directive("solid", function () {
        return {
            restrict: "E",
            scope: {size: "@"},
            replace: true,
            template: '<div class="solid" grow="20" shrink="0" ng-style="{\'max-height\':size,\'max-width\':size}"></div>'
        };
    });

    angularLayoutModule.directive("glue", function () {
        return {
            restrict: "E",
            replace: true,
            template: '<div grow="20" shrink="20" class="flexbox glue"></div>'
        };
    });

    var directiveFactory = function (directiveName,direction, suffix) {
        angularLayoutModule.directive(directiveName + suffix, function () {
            return {
                restrict: "E",
                replace: true,
                transclude: true,
                template: '<div class="flexbox" direction' + suffix + '="'+direction+'" ng-transclude></div>'
            };
        });
        angularLayoutModule.directive("vbox", function () {
            return {
                restrict: "A",
                link: function (scope, element) {
                    element.attr("direction" + suffix, "column");
                    element.addClass("flexbox");
                }
            };
        });
    };

    directiveFactory("hbox","row","");
    directiveFactory("hbox-xs","row","-xs");
    directiveFactory("hbox-sm","row","-sm");
    directiveFactory("hbox-md","row","-md");
    directiveFactory("hbox-lg","row","-lg");

    directiveFactory("vbox","column","");
    directiveFactory("vbox-xs","column","-md");
    directiveFactory("vbox-sm","column","-md");
    directiveFactory("vbox-md","column","-md");
    directiveFactory("vbox-lg","column","-lg");

})();
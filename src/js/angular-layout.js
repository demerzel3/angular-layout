(function () {
    'use strict';
    var angularLayoutModule = angular.module("angular.layout", []);

    angularLayoutModule.directive("solid", function () {
        return {
            restrict: "E",
            scope: {size: "@"},
            replace: true,
            template: '<div class="flexbox solid" grow="20" shrink="0" ng-style="{\'max-height\':size,\'max-width\':size,\'flex-basis\':size}"></div>'
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
        angularLayoutModule.directive(directiveName, function () {
            return {
                restrict: "E",
                replace: true,
                transclude: true,
                template: '<div class="flexbox '+directiveName +'" direction' + suffix + '="'+direction+'" ng-transclude></div>'
            };
        });
        angularLayoutModule.directive(directiveName, function () {
            return {
                restrict: "A",
                link: function (scope, element) {
                    element.attr("direction" + suffix, direction);
                    element.addClass("flexbox");
                    element.addClass(directiveName);
                }
            };
        });
    };

    directiveFactory("hbox","row","");
    directiveFactory("hboxXs","row","-xs");
    directiveFactory("hboxSm","row","-sm");
    directiveFactory("hboxMd","row","-md");
    directiveFactory("hboxLg","row","-lg");

    directiveFactory("vbox","column","");
    directiveFactory("vboxXs","column","-xs");
    directiveFactory("vboxSm","column","-sm");
    directiveFactory("vboxMd","column","-md");
    directiveFactory("vboxLg","column","-lg");

})();
Angular Layout
==============

Angular Layout is a collection of directives written in [angular][2], to
simplify building of full-page layouts. It is inspired by Apache Flex (formerly
Adobe Flex) way of defining layout by means of declarative xml elements and
related attributes.

This library, although very simple, is experimental and has not yet been tested
extensively. Please provide feedback if you notice a bug or misbehavior, and,
anyway, **use at your own peril.**

Installation
------------

The easiest way to install Angular Layout is using [bower][1]. If you haven't
tried it yet give it a shot, maybe by trying out the awesome [ng-boilerplate][3]
for your next project.

Usage
-----

Add the module *ng.layout* to your application dependencies, like so:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
angular.module('myApp', ['ng.layout', ...])
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Don't forget to refer angular-layout.js and angular-layout.css in your html
pages, like so:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<script src="angular-layout.js"></script>
<link rel="stylesheet" href="angular-layout.css"/>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Look at the [demos][4] for some usage examples (more to come).

Browser support
---------------

The main target of this library are mobile devices and modern browsers, old
versions of IE are not taken into account at the current stage of development.

The demos have been tested and found working in:

-   Safari on iPad

-   Chrome on iPad

-   Chrome on Mac OS

-   Firefox on Mac OS

-   Safari on Mac OS

[4]: <https://github.com/demerzel3/angular-layout/tree/master/demos>

[1]: <http://bower.io/>

[3]: <http://joshdmiller.github.io/ng-boilerplate>

[2]: <http://angularjs.org/>

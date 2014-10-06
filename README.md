Angular Layout
==============

Angular Layout is a collection of directives written in [angular][2], to
simplify building of full-page layouts. It is inspired by Apache Flex (formerly
Adobe Flex) and Java Swing way of defining layout by means of declarative xml elements and
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

Add the module *angular.layout* to your application dependencies, like so:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
angular.module('myApp', ['angular.layout', ...])
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Don't forget to refer angular-layout.js and angular-layout.css in your html
pages, like so:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<script src="angular-layout.js"></script>
<link rel="stylesheet" href="angular-layout.css"/>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You may use minified resource versions respectively angular-layout.min.js and angular-layout.min.css.
Look at the [demos][4] for some usage examples.

Once angular-layout module is loaded you can use following directives :

How it works
------------

All the layouting is done via CSS, that is: no Javascript is involved in the
layouting, so it is super-fast and lightweight.

Note that directives are here to help, but css would be enough.
Directive do not always use CSS name. By experience, align-items, align-content and justify are very confusing !
So directive allows you to use (I hope) easy to understand name : align, justify, x-justify (x for cross axis).
However, values for properties are the same.

Angular Layout is built on top of Flexbox (currently a W3C Candidate
Recommandation) and aims to make it easier for angular developers to leverage
its power and flexibility. Read more about Flexbox [here][5].

Browser support
---------------

The main target of this library are mobile devices and modern browsers, old
versions of IE are not taken into account at the current stage of development.
CSS flex relative properties are supported on all recent browser : [Check that !][7]


v0.1.0 Breaking changes
-----------------------
- no more scroll
- attribute name changed ! (now : grow,shrink,align,justify,x-justify,vbox,hbox and responsible versions)
- no more padding
- module name changed to `angular.layout` (ng is reserved by convention to official modules)

Release History
==================
 * 2014-10-06   v0.1.0   upgrate to Angular 1.2.26, Flexbox [pre RC on 25 September 2014 spec][6]. no dependencies. refactoring. autoprefixed.
 * 2013-09-16   v0.0.2   remove underscore, meteor dependencies
 * 2013-09-15     v0.0.1     using Angular 1.1.5 Bootstrap 3, Flexbox 1999 spec


[1]: <http://bower.io/>

[2]: <http://angularjs.org/>

[3]: <http://joshdmiller.github.io/ng-boilerplate>

[4]: <https://github.com/demerzel3/angular-layout/tree/master/demos>

[5]: <http://css-tricks.com/snippets/css/a-guide-to-flexbox/>

[6]: <http://www.w3.org/TR/2014/WD-css-flexbox-1-20140925/>

[7]: <http://caniuse.com/#feat=flexbox>

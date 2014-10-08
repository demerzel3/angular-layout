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

The easiest way to install Angular Layout is using [bower][1].
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
bower install --save angular-layout
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Usage
-----

Add the module `angular.layout` to your application dependencies, like so:

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

###vbox / hbox

Added as attribute in a container such as div, body, td... These directives make the container a Flex container.
* `hbox` to align child horizontally
* `vbox` to align child vertically

### container attributes
Other attributes could be added to organize child fine :
* `justify` could be set to `center`, `flex-end`, `flex-start` (default value), `space-around`, `space-between`.
   As the justify in text document layout, this attribute defines where the child group should be placed if there is more space than needed.

* `align` could be set to `baseline`, `center`, `flex-end`, `flex-start`, `stretch` (default value).
 This attribute define on which criteria child should be aligned each other.

* `x-justify` could be set to `center`, `flex-end`, `flex-start` (default value).
This attribute defines where the child group should be placed if there is more space than needed ON THE CROSS AXIS (ie vertically for `hbox`, horizontally for `vbox`)

* `wrap` could be set to `nowrap` (default value), `wrap`, `wrap-reverse`.
This attribute define the wrap policy.

Note that you can use hbox and vbox as elements to

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<vbox></vbox>
<!-- is a short for (due to css default values)-->
<div vbox justify="flex-start" align="stretch" x-justify="flex-start" wrap="nowrap"></div>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### child attributes

* `grow` : the ability to take more place if possible. Valued with an integer, the value is use as a relative ability (big grow will grow quicker and more)
* `shrink` : the ability to take less place if required. Valued with an integer, the value is use as a relative ability (big shrink will shrink quicker and more)
* `order` : the index position among other child.

### responsive extension
As well as bootstrap 3, the layout could be responsively defined with angular-layout.
Angular-Layout provide four *extension* to its all directives (vbox, hbox, grow, shrink, order) : `*-xs`, `*-sm`, `*-md`, `*-lg`.
Just add this extension to directives and restrict the directive to the associated media.
Used in conjonction with bootstrap `hidden-xs` or `visible-xs`... You can create responsive application easily.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<!-- So you can define a `vbox` that become a `hbox` on a small media by this way -->
<vbox hbox-sm></vbox>

<!-- or reorder an item as first element on extra small media : -->
<div vbox order-xs="0"></div>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


How it works
------------

All the layouting is done via CSS, that is: no Javascript is involved in the
layouting, so it is super-fast and lightweight.

Note that directives are here to help, but css would be enough.
Directive do not always use CSS name. By experience, `align-items`, `align-content` and `justify` are very confusing !
So directive allows you to use (I hope) easy to understand name : `align`, `justify`, `x-justify` (x for cross axis).
However, values for properties are the same.

Angular Layout is built on top of Flexbox and aims to make it easier for angular developers to leverage
its power and flexibility. Read more about Flexbox [here][5].

Browser support
---------------

The main target of this library are mobile devices and modern browsers, old
versions of IE are not taken into account at the current stage of development.
CSS flex relative properties are supported on all recent browsers : [Check that !][7]


v0.1.0 Breaking changes
-----------------------
- no more scroll
- no more padding
- attribute name changed to fit new spec ! (now : grow,shrink,align,justify,x-justify,vbox,hbox and responsible versions)
- module name changed to `angular.layout` (ng is reserved by convention to official modules)

Release History
==================
 * 2014-10-06       v0.1.0 (in progress) upgrate to Angular 1.2.26, Flexbox [pre RC on 25 September 2014 spec][6]. no dependencies. refactoring. autoprefixed.
 * 2013-09-16       v0.0.2  remove underscore, meteor dependencies
 * 2013-09-15       v0.0.1  using Angular 1.1.5 Bootstrap 3, Flexbox 1999 spec


[1]: <http://bower.io/>

[2]: <http://angularjs.org/>

[3]: <http://joshdmiller.github.io/ng-boilerplate>

[4]: <https://github.com/demerzel3/angular-layout/tree/master/demos>

[5]: <http://css-tricks.com/snippets/css/a-guide-to-flexbox/>

[6]: <http://www.w3.org/TR/2014/WD-css-flexbox-1-20140925/>

[7]: <http://caniuse.com/#feat=flexbox>

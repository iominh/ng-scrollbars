# Readme

This is a lightweight Angularjs plugin wrapper around
[Malihu's custom content scrollbar by Manos Malihutsakis](http://manos.malihu.gr/jquery-custom-content-scroller/).
In addition to providing configurable scrollbar directives, it also allows for universal styles applied to
all scrollbars.


# Demo

[http://minhongrails.github.io/ng-scrollbars/](http://minhongrails.github.io/ng-scrollbars/)

# History

I needed an AngularJS scrollbar that worked well with a dark theme and was consistently styled across different browsers.
I found several Angular scrollbars listed below but in general the styling didn't fit or they were lacking
features.

Ultimately I found a [Stackoverflow post](http://stackoverflow.com/questions/21306853/using-a-directive-to-make-an-element-scrollable-in-angularjs) by JMaylin that inspired me to finish
the integration effort he/she started.

# Usage

1. Add ng-scrollbars and its dependencies to your main file (index.html)

	This can be downloaded by
  * Using bower and running `bower install ng-scrollbars`
  * Or downloading the [production version][min] or the [development version][max].

  [min]: https://github.com/minhongrails/ng-scrollbars/blob/master/dist/scrollbars.min.js
  [max]: https://github.com/minhongrails/ng-scrollbars/blob/master/src/scrollbars.js

  In your web page:

  ```html
  <link rel="stylesheet" href="bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css" type="text/css"/>
  <script src="bower_components/jquery/dist/jquery.min.js"></script>
  <script src="bower_components/angular/angular.min.js"></script>
  <script src="bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js"></script>
  <script src="bower_components/ng-scrollbars/dist/scrollbars.min.js"></script>
  ```

2. Set `ngScrollbars` as a dependency in your module
  ```javascript
  var app = angular.module('app', ['ngScrollbars'])
  ```

3. Add ng-scrollbar directive to any elements:
  ```html
  <div ng-scrollbars ng-scrollbars-config="config"> .... </div>
  ```

4. Specify the configuration as an object visible within the directive's scope:

	4a. For example, the 'config' object referenced in step 3 could be configured like the following:

	```javascript
	$scope.config = {
		autoHideScrollbar: false,
		theme: 'light',
		advanced:{
			updateOnContentResize: true
		},
			setHeight: 200,
			scrollInertia: 0
		}
	}
	```

	4b. Some system-wide settings, such as enabling the buttons, can also be set by configuring the
	ScrollBarsProvider that's included in the ngScrollbars module as referenced in step 2:

	```javascript
	var app = angular.module('app', ['ngScrollbars']);
	app.config(function (ScrollBarsProvider) {
		ScrollBarsProvider.defaults = {
			scrollButtons: {
				enable: true // enable scrolling buttons by default
			},
				axis: 'yx' // enable 2 axis scrollbars by default
		};
	});
	```

	4c. System-wide defaults can also be specified. However, these settings are overridden by any
	scope level configuration as shown in 4a. For example:

	```javascript
	var app = angular.module('app', ['ngScrollbars']);
	app.config(function (ScrollBarsProvider) {
		ScrollBarsProvider.defaults = {
			scrollButtons: {
				enable: true // enable scrolling buttons by default
			},
			axis: 'yx' // enable 2 axis scrollbars by default,

			// the following settings are defined for all scrollbars unless the
			// scrollbar has local scope configuration
			theme: 'dark',
			autoHideScrollbar: true
		};
	});
	```

All configuration options available to Malihu's scrollbar can be provided through the above
 configuration. See [Malihu's page](http://manos.malihu.gr/jquery-custom-content-scroller/) for more details


# Common Gotchas

If the width for some reason keeps shrinking then make sure you specify the width of the CSS for all
children elements where ng-scrollbars is applied.

Here's an example ng-scrollbars use case:

```html
<div class="container" ng-scrollbars>
	<h1>Title</h1>
	<p>A bunch of content</p>
</div>
```

The CSS may need to structured like the following:

```css
.container {
	width: 250px;
}

.container p, .container h1 {
	width: 210px;
}
```

This is because Malihu looks at the width of the child elements and adjusts, so the child elements
may shrink to 0 width if nothing is specified. Also note the container width is a little wider
than its contents width because of the extra scrollbar width.

# Changelog

## 0.0.4

Fix so directive works with ng-strict-di

## 0.0.3

Updated to allow user to set defaults to all scrollbars through the provider configuration.
These defaults are overridden by any scope configuration.

## 0.0.2

Updated ngScrollbars module to allow for configuration that applies
to all scrollbars such as the buttons and horizontal scrollbar support

## 0.0.1

Initial release with basic directive wrapper around Malihu


# Other options

In my search for angularjs scrollbars, I also came across a few others:

* [Ng-scrollbar](https://github.com/asafdav/ng-scrollbar)
* [Angular-perfect-scrollbar](https://github.com/itsdrewmiller/angular-perfect-scrollbar)
* [ngTinyScrollbar](https://github.com/yads/ngTinyScrollbar)


# License

MIT
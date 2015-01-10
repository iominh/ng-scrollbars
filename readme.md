# Readme

This is a port of [Malihu's awesome scrollbar by Manos Malihutsakis](http://manos.malihu.gr/jquery-custom-content-scroller/) plugin to AngularJS. I needed an AngularJS scrollbar that worked well with a dark theme and was consistently styled across different browsers. I found several Angular
scrollbars listed below but in general the styling didn't fit or they were lacking 
features.

Ultimately I found a [Stackoverflow post](http://stackoverflow.com/questions/21306853/using-a-directive-to-make-an-element-scrollable-in-angularjs) by JMaylin that inspired me to finish
the integration effort he/she started.

# Demo

[http://minhongrails.github.io/ng-scrollbars/](http://minhongrails.github.io/ng-scrollbars/)

# Usage

1. Install using bower

	bower install ng-scrollbars

```html
<link rel="stylesheet" href="bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css" type="text/css"/>
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/angular/angular.min.js"></script>
<script src="bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js"></script>
<script src="bower_components/ng-scrollbars/dist/scrollbars.js"></script>
```

2. Include the module in your angular app

```javascript
var myapp = angular.module('myapp', ['ngScrollbar'])
```

3. Add the ng-scrollbars directive to an element

```javascript
<div class="panel" ng-scrollbars ng-scrollbars-config="config"> .... </div>
```

4. Specify the configuration as an object visible within the directive's scope:

For example, the 'config' object referenced in step 3 could be configured like the following:

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

All configuration options available to Malihu's scrollbar are available as directive
attributes or passed in through as a configuration object as described in step 4 above. See
[Malihu's page](http://manos.malihu.gr/jquery-custom-content-scroller/) for more details

# Other Options

In my search for angularjs scrollbars, I also came across a few others:

* [Ng-scrollbar](https://github.com/asafdav/ng-scrollbar)
* [Angular-perfect-scrollbar](https://github.com/itsdrewmiller/angular-perfect-scrollbar)
* [ngTinyScrollbar](https://github.com/yads/ngTinyScrollbar)

# License

MIT 
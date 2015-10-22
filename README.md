# ng-dynautofocus

[See Full Write-Up](http://rommelsantor.com/clog/2015/10/14/angularjs-auto-focus-input-after-router-template-is-loaded-in-spa/)

With single-page apps in AngularJS, loading HTML templates into your ng-view that contain an input with the autofocus attribute, you'll probably notice that the autofocus action is effectively ignored.

Use this simple Run block to detect when the dynamic route has changed and attempt to set focus to the first element found that wants autofocus.

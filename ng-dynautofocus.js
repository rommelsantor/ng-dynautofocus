
// first thing's first; initialize the app  
var app = angular.module('yourAppName', ['ngRoute']);
  
// set up a Run Block  
app.run(function _forceAutofocus($rootScope, $timeout) {  
  
  // tell Angular to call this function when a route change completes  
  $rootScope.$on('$routeChangeSuccess', function() {  
    // we can't set focus at this point; the DOM isn't ready for us  
  
    // instead, we define a callback to be called after the $digest loop  
    $timeout(function(){  
      // once this is executed, our input should be focusable, so find (with jQuery)  
      // whatever is on the page with the autofocus attribute and focus it; fin.  
      $('[autofocus]').focus();  
    });  
  });  
  
});

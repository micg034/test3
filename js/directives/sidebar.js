app.directive('sidebar', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'templates/sidebar.html' 
  }; 
});

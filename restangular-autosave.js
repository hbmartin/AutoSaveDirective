angular.module('autoSave', []).directive('autoSave', function ($route, Restangular, $timeout) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {

		// TODO: support model callbacks
      var save = function () {
        Restangular.put(attrs.objectStore, scope[attrs.autoSave]);
      };
	  
	  // TODO: configurable throttling
      $timeout(function () {
        element.find('input, textarea').bind('blur', save);
      }, 100);
    }
  };
});
(function() {
  'use strict';

  angular
    .module('myapp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('partners', {
        url: '/partners',
        templateUrl: 'partners.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();

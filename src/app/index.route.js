(function() {
  'use strict';

  angular
    .module('dreamwareTestTask')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            url: '/',
            abstract: true,
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        }).state('main.home', {
            url: 'home',
            templateUrl: 'app/templates/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        }).state('main.upload', {
            url: 'upload',
            templateUrl: 'app/templates/upload.html',
            controller: 'UploadController',
            controllerAs: 'upload'
        })

    $urlRouterProvider.otherwise('home');
  }

})();

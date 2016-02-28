(function(){
"use strict"

angular
  .module('Portfolio')
  .config(AppRoutes);

AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

function AppRoutes($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when("", "/portfolio");
  $urlRouterProvider.when("/", "/portfolio");

  $stateProvider
    .state('portfolio', {
      url:'/portfolio',
      templateUrl:  'portfolio.html',
      controller:   'PortfolioController'
    })
    .state('portfolio.projects', {
      url:'/:id',
      params: {project: null},
      templateUrl:  'portfolio.projects.html',
      controller:   'ProjectsController'
    })
    .state('about', {
      url:'/about',
      templateUrl:  'about.html',
      controller:   'PortfolioController'
    });
    $urlRouterProvider.otherwise('/');
  }
})()




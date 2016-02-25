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
      templateUrl: 'portfolio.html',
      controller: 'PortfolioController'
    })
    .state('portfolio.projects', {
      url:'/:id',
      params: {project: null},
      templateUrl:'portfolio.projects.html'
      // controller: 'ProjectsController'
      // controller: function($scope, $stateParams){
      //   $scope.project = $scope.projects[$stateParams.id]
      // }
      // controller: function($stateParams){
      //   console.log($stateParams)
      //   // console.log(project)
      //   // project.id = $stateParams.id
      // }
    });
    $urlRouterProvider.otherwise('/');
  }
})()




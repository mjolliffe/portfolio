(function(){
"use strict"

angular
  .module('Portfolio')
  .config(AppRoutes);

AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

function AppRoutes($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('portfolio', {
      url:'/',
      templateUrl: 'portfolio.html',
      controller: 'ProjectController'
    })
    .state('project', {
      url:'/project/:id',
      params: {project: null},
      templateUrl:'project.html',
      controller: 'ProjectController'
      // controller: function($stateParams){
      //   console.log($stateParams)
      //   // console.log(project)
      //   // project.id = $stateParams.id
      // }
    });
    $urlRouterProvider.otherwise('/');
  }
})()




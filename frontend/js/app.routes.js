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
      templateUrl: 'portfolio.html'
    })
    .state('project', {
      url:'/project',
      templateUrl:'project.html'
    });
    $urlRouterProvider.otherwise('/');
  }
})()




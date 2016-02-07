angular
  .module('Portfolio', ['ui.router'])
  .config(MainRouter)

function MainRouter($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('index', {
      url:'/',
      templateUrl: 'index.html'
    })
    $urlRouterProvider.otherwise('/');
}

angular.module('Portfolio')
  .controller('PortfolioController', PortfolioController);

PortfolioController.$inject = ['ProjectData', '$state', '$stateParams', '$scope'];

function PortfolioController (ProjectData, $state, $stateParams, $scope){

  $scope.projects = ProjectData.projects

  // console.log(projects)
}

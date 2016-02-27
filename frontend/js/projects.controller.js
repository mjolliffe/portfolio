angular.module('Portfolio')
  .controller('ProjectsController', ProjectsController);

ProjectsController.$inject = ['ProjectData', '$state', '$stateParams', '$scope'];

function ProjectsController (ProjectData, $state, $stateParams, $scope){

  $scope.project = $scope.projects[$stateParams.id]

  $scope.technology = $scope.project.technology

  $scope.url = $scope.project.url

  $scope.photos = $scope.project.photos

  $scope.page = $scope.project.id

}

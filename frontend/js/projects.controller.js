angular.module('Portfolio')
  .controller('ProjectsController', ProjectsController);

ProjectsController.$inject = ['ProjectData', '$state', '$stateParams', '$scope'];

function ProjectsController (ProjectData, $state, $stateParams, $scope){

  $scope.project = $scope.projects[$stateParams.id]

  $scope.technology = $scope.project.technology

  $scope.url = $scope.project.url

  $scope.photos = $scope.project.photos

  $scope.goBack = function (){
    if ($scope.project.id <= 0) {
      $state.go('portfolio.projects', {project: $scope.project.id})
    } else {
      $state.go('portfolio.projects', {project: $scope.project.id-=1})
    }
  }

  $scope.goNext = function (){
    if ($scope.project.id >= 13) {
      $state.go('portfolio.projects', {project: $scope.project.id})
      $scope.show = false
    } else {
      $state.go('portfolio.projects', {project: $scope.project.id+=1})
      $scope.show = true
    }
  }

  console.log($scope.project.id)
}

angular.module('Portfolio')
  .controller('ProjectsController', ProjectsController);

ProjectsController.$inject = ['ProjectData', '$state', '$stateParams', '$scope'];

function ProjectsController (ProjectData, $state, $stateParams, $scope){

  $scope.project = $scope.projects[$stateParams.id]

  // $scope.show = function (){
  //   if ($scope.project.id == 0) {
  //     $scope.show = false
  //   } else {
  //     $scope.show = true
  //   }
  // }

  $scope.technology = $scope.project.technology

  $scope.goBack = function (){
    if ($scope.project.id <= 0) {
      $scope.project.id = $scope.project.id
    } else {
      $scope.project.id = $scope.project.id-=1
    }
  }

  $scope.goNext = function (){
    if ($scope.project.id >= 13) {
      $scope.project.id = $scope.project.id
      $scope.show = false
    } else {
      $scope.project.id = $scope.project.id+=1
      $scope.show = true
    }
  }
}

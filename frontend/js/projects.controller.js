angular.module('Portfolio')
  .controller('ProjectsController', ProjectsController);

ProjectsController.$inject = ['ProjectData', '$state', '$stateParams', '$scope'];

function ProjectsController (ProjectData, $state, $stateParams, $scope){
  // $scope.projects = ProjectData.projects

  // $scope.changeState = function (project) {
  //   console.log("in changeState: ", project)
  //   $state.go('project', {project: {id: project.id}});
  // };

  $scope.project = $scope.projects[$stateParams.id]


  $scope.goBack = function (){
    console.log("click")
    if ($scope.project.id <= 0) {
      $scope.project.id = " "
    } else {
      $scope.project.id = $scope.project.id-=1
    }
    console.log($scope.project.id)
  }

  $scope.goNext = function (){
    if ($scope.project.id >= 13) {
      $scope.project.id = " "
    } else {
      $scope.project.id = $scope.project.id+=1
    }
    console.log($scope.project.id)
  }
}

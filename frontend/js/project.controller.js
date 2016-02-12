angular.module('Portfolio')
  .controller('ProjectController', ProjectController);

ProjectController.$inject = ['ProjectData', '$state', '$stateParams', '$scope'];

function ProjectController (ProjectData, $state, $stateParams, $scope){
  var vm = this;
  vm.projects = ProjectData.projects

  vm.changeState = function (project) {
    console.log("in changeState: ", project)
    $state.go('project', {project: {id: project.id}});
  };

  $scope.project = $stateParams.project
  // $scope.apple = $stateParams.id
  // console.log("States: ", $stateParams.project)
  // console.log("Project: ", vm.project)
  return this;
}

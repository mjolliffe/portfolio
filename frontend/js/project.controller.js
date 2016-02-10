angular.module('Portfolio')
  .controller('ProjectController', ProjectController);

ProjectController.$inject = ['ProjectData'];

function ProjectController (ProjectData){
  var vm = this;

  vm.projects = ProjectData.projects

  // vm.hover = function(project) {
  //   // Shows/hides the project name on hover
  //   return project.showName != project.showName;
  // };
}

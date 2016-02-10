angular.module('Portfolio')
  .controller('ProjectController', ProjectController);

ProjectController.$inject = ['ProjectData'];

function ProjectController (ProjectData){
  var vm = this;

  vm.projects = ProjectData.projects

}

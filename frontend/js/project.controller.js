angular.module('Portfolio')
  .controller('ProjectController', ProjectController);

ProjectController.$inject = ['ProjectData'];

function ProjectController (ProjectData){
  var vm = this;

  vm.projects = ProjectData.projects

  // function($state) {
  //   this.changeState = function () {
  //     $state.go('project.id');
  //   };
  // }

  // function setCurrent(project){
  //   console.log('click')
  //   $state.go('project', {"id": project.id})
  // }

  // vm.showProject = function(project) {
  //   console.log('click')
  //   $location.path('#/project/' + project.id);
  // };

  vm.changeState = function () {
    $state.go('project', {"id":project.id});
  };
}

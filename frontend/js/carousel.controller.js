angular.module('Portfolio')
  .controller('CarouselController', CarouselController);

CarouselController.$inject = ['ProjectData', '$state', '$stateParams', '$scope'];

function CarouselController (ProjectData, $state, $stateParams, $scope){
  $scope.slides = $scope.projects[$stateParams.id].slides
  $scope.myInterval = 4000;
  $scope.noWrapSlides = false;

}

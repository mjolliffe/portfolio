angular.module('Portfolio')
  .controller('CarouselController', CarouselController);

CarouselController.$inject = ['ProjectData', '$state', '$stateParams', '$scope'];

function CarouselController (ProjectData, $state, $stateParams, $scope){
  $scope.photos = $scope.projects[$stateParams.id].photos

  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    // var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'assets/images/asia.png',
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }

}

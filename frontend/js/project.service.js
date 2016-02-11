angular.module('Portfolio')
.factory('ProjectData', function($state) {

  var service = {}

  service.projects = [
    {
      "id": 1,
      "name": "Parkeez Visual Identity + Website",
      "image": "assets/images/Beer.jpg",
      "date": 2016,
      "description": "",
      "web": true,
      "design": true,
      "print": false
    },
    {
      "id": 2,
      "name": "Aleph Bet Learning Game",
      "image": "assets/images/aleph.png",
      "date": 2015,
      "description": "",
      "web": true,
      "design": true,
      "print": false
    },
    {
      "id": 3,
      "name": "Cascade Brewing Visual Identity",
      "image": "assets/images/Beer.jpg",
      "date": 2015,
      "description": "",
      "web": false,
      "design": true,
      "print": true
    },
    {
      "id": 4,
      "name": "Milky Web Poster",
      "image": "assets/images/Boob2.jpg",
      "date": 2015,
      "description": "",
      "web": false,
      "design": true,
      "print": true
    },
    {
      "id": 5,
      "name": "Mishima Concert Poster",
      "image": "assets/images/mishima2.jpg",
      "date": 2015,
      "description": "",
      "web": false,
      "design": true,
      "print": true
    },
    {
      "id": 6,
      "name": "Create Poster",
      "image": "assets/images/Create1.jpg",
      "date": 2015,
      "description": "",
      "web": false,
      "design": true,
      "print": true
    },
    {
      "id": 7,
      "name": "Palette Website",
      "image": "assets/images/palette.png",
      "date": 2015,
      "description": "",
      "web": true,
      "design": true,
      "print": false
    },
    {
      "id": 8,
      "name": "Design Questions Visual Identity + Website",
      "image": "assets/images/Beer.jpg",
      "date": 2016,
      "description": "",
      "web": true,
      "design": true,
      "print": false
    },
    {
      "id": 9,
      "name": "Providence Granola Project Packaging",
      "image": "assets/images/Beer.jpg",
      "date": 2015,
      "description": "",
      "web": false,
      "design": true,
      "print": false
    },
    {
      "id": 10,
      "name": "10 Principles of Design Website",
      "image": "assets/images/GoodDesign1-500.jpg",
      "date": 2015,
      "description": "",
      "web": false,
      "design": true,
      "print": false
    },
    {
      "id": 11,
      "name": "Treehouse Visual Identity",
      "image": "assets/images/Beer.jpg",
      "date": 2015,
      "description": "",
      "web": false,
      "design": true,
      "print": false
    },
    {
      "id": 12,
      "name": "Baja California Real Estate Visual Identities",
      "image": "assets/images/Beer.jpg",
      "date": 2015,
      "description": "",
      "web": false,
      "design": true,
      "print": false
    },
    {
      "id": 13,
      "name": "Asia Travel Book",
      "image": "assets/images/Beer.jpg",
      "date": 2015,
      "description": "",
      "web": false,
      "design": true,
      "print": true
    },
    {
      "id": 14,
      "name": "Calligraphy Series",
      "image": "assets/images/Beer.jpg",
      "date": 2015,
      "description": "",
      "web": false,
      "design": true,
      "print": true
    }
  ];

  return service;

  // function hover(project) {
  //   // Shows/hides the project name on hover
  //   return project.showName = ! project.showName;
  // };
});

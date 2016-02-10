angular.module('Portfolio')
.factory('ProjectData', function() {

  var service = {}

  service.projects = [
    {
      "name": "Palette Website",
      "image": "",
      "date": 2015,
      "description": "",
      "web": true,
      "design": true,
      "print": false
    },
    {
      "name": "Parkeez Visual Identity + Website",
      "image": "",
      "date": 2016,
      "description": "",
      "web": true,
      "design": true,
      "print": false
    },
    {
      "name": "Aleph Bet Learning Game",
      "image": "",
      "date": 2015,
      "description": "",
      "web": true,
      "design": true,
      "print": false
    },
    {
      "name": "Cascade Brewing Visual Identity",
      "image": "",
      "date": 2015,
      "description": "",
      "web": false,
      "design": true,
      "print": true
    },
    {
      "name": "Milky Web Poster",
      "image": "",
      "date": 2015,
      "description": "",
      "web": false,
      "design": true,
      "print": true
    },
    {
      "name": "Mishima Concert Poster",
      "image": "",
      "date": 2015,
      "description": "",
      "web": false,
      "design": true,
      "print": true
    },
    {
      "name": "Create Poster",
      "image": "",
      "date": 2015,
      "description": "",
      "web": false,
      "design": true,
      "print": true
    },
    {
      "name": "Design Questions Visual Identity + Website",
      "image": "",
      "date": 2016,
      "description": "",
      "web": true,
      "design": true,
      "print": false
    },
    {
      "name": "Providence Granola Project Packaging",
      "image": "",
      "date": 2015,
      "description": "",
      "web": false,
      "design": true,
      "print": false
    },
    {
      "name": "10 Principles of Design Website",
      "image": "",
      "date": 2015,
      "description": "",
      "web": false,
      "design": true,
      "print": false
    },
    {
      "name": "Treehouse Visual Identity",
      "image": "",
      "date": 2015,
      "description": "",
      "web": false,
      "design": true,
      "print": false
    },
    {
      "name": "Baja California Real Estate Visual Identities",
      "image": "",
      "date": 2015,
      "description": "",
      "web": false,
      "design": true,
      "print": false
    },
    {
      "name": "Asia Travel Book",
      "image": "",
      "date": 2015,
      "description": "",
      "web": false,
      "design": true,
      "print": true
    },
    {
      "name": "Calligraphy Series",
      "image": "",
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

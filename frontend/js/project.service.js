angular.module('Portfolio')
.factory('ProjectData', function() {

  var service = {}
  service.projects = [
    {
      "id": 0,
      "name": "Parkeez Visual Identity + Website",
      "image": "assets/images/parkeez.png",
      "date": 2016,
      "description": "",
      "web": true,
      "design": true,
      "print": false,
      "technology": ["MongoDB", "Express", "NodeJS", "JavaScript", "Google API", "HTML5", "SaSS", "Bootstrap"],
      "url": "http://parkeez.herokuapp.com"
    },
    {
      "id": 1,
      "name": "Aleph Bet - Hebrew Alphabet Learning Game",
      "image": "assets/images/aleph.png",
      "date": 2015,
      "description": "",
      "web": true,
      "design": true,
      "print": false,
      "technology": ["JavaScript", "jQuery", "HTML5", "SaSS"],
      "url": "http://aleph-bet.bitballoon.com/"
    },
    {
      "id": 2,
      "name": "Cascade Brewing Visual Identity",
      "image": "assets/images/Beer.jpg",
      "date": 2015,
      "description": "Re-design created for a well-established brewery located in the Pacific Northwest. Cascade Brewing is best-known for its fruit-forward sour beer concoctions. Student Project.",
      "web": false,
      "design": true,
      "print": true,
      "technology": ["Adobe Illustrator", "Adobe Photoshop"]
    },
    {
      "id": 3,
      "name": "Milky Web Poster",
      "image": "assets/images/milkyweb.jpg",
      "date": 2015,
      "description": "Poster printed on Paper. 90cm x 128cm. 2015. “The Milky Web” is a project created to comment on the movement of society towards rearing children raised, from birth, in a tech-heavy world. In extreme cases children are given technology instead of personal attention.",
      "web": false,
      "design": true,
      "print": true,
      "technology": ["Adobe Illustrator", "Adobe Photoshop"]
    },
    {
      "id": 4,
      "name": "Mishima Concert Poster",
      "image": "assets/images/mishima.jpg",
      "date": 2015,
      "description": "Concert Poster printed on Paper. 90cm x 128 cm. Designed for Catalan alt-rock performance held in Barcelona, Catalunya, Spain. Student Project. ",
      "web": false,
      "design": true,
      "print": true,
      "technology": ["Adobe Illustrator", "Adobe Photoshop"]
    },
    {
      "id": 5,
      "name": "Create Poster",
      "image": "assets/images/create.jpg",
      "date": 2015,
      "description": "Positive Propaganda printed on Cloth. 60cm x 100 cm. Created emphasize the importance of bringing ideas to life instead of just leaving them as ideas. Designers and artists spend a lot of time pouring over their concepts when they should probably be getting to work. Without action there is no art.",
      "web": false,
      "design": true,
      "print": true,
      "technology": ["Adobe Illustrator", "Adobe Photoshop"]
    },
    {
      "id": 6,
      "name": "Palette Website",
      "image": "assets/images/palette.png",
      "date": 2015,
      "description": "",
      "web": true,
      "design": true,
      "print": false,
      "technology": ["Ruby", "Rails", "jQuery","HTML5", "CSS3", "SaSS", "Bootstrap"],
      "url": "https://palette-application.herokuapp.com/"
    },
    {
      "id": 7,
      "name": "Design Questions Visual Identity",
      "image": "assets/images/design.png",
      "date": 2016,
      "description": "This logo was developed for a private project that is currently in the works. The idea behind Design Questions is to create a virtual space in which to pose different questions related to graphic design to the wider community, having an expert answer the question, and starting a conversation from there.",
      "web": false,
      "design": true,
      "print": false,
      "technology": ["Adobe Illustrator"]
    },
    {
      "id": 8,
      "name": "Calligraphy Series",
      "image": "assets/images/neruda.jpg",
      "date": 2015,
      "description": "",
      "web": false,
      "design": true,
      "print": true,
      "technology": false
    },
    {
      "id": 9,
      "name": "Baja California Real Estate Visual Identities",
      "image": "assets/images/torza.png",
      "date": 2015,
      "description": "These logos were created for modern, seaside, luxury real estate developments located in Baja California, Mexico. The living spaces in Privada del Mar are more relaxed and elegant while those at Real Mediterraneo are more modern and structrual.    ",
      "web": false,
      "design": true,
      "print": false,
      "technology": ["Adobe Illustrator"]
    },
    {
      "id": 10,
      "name": "Asia Travel Book",
      "image": "assets/images/asia2.png",
      "date": 2015,
      "description": "This book is a personal project meant to document my journey through Asia via text and image.",
      "web": false,
      "design": true,
      "print": true,
      "technology": ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"]
    },
    {
      "id": 11,
      "name": "TreeStack Visual Identity",
      "image": "assets/images/treestack.png",
      "date": 2015,
      "description": "This logo was created for a tech startup focused on media and web design. The company was looking for a modern, simple logo that acknowledged their focus on clean, sophisticated programming.",
      "web": false,
      "design": true,
      "print": false,
      "technology": ["Adobe Illustrator"]
    },
    {
      "id": 12,
      "name": "Providence Granola Project Packaging",
      "image": "assets/images/nuts.png",
      "date": 2015,
      "description": "Package label design developed for Providence Granola Project’s new line of spiced nuts. PGP is a nonprofit that helps train and educate refugees from around the world.",
      "web": false,
      "design": true,
      "print": false,
      "technology": ["Adobe Illustrator"]
    },
    {
      "id": 13,
      "name": "10 Principles of Design Website",
      "image": "assets/images/dieter.jpg",
      "date": 2015,
      "description": "Customized website created to promote Dieter Rams' 10 Principles for Good Design. The website is meant to be simple, direct, and user-friendly.",
      "web": false,
      "design": true,
      "print": false,
      "technology": ["HTML5", "CSS3"],
      "url": ""
    }
  ];

  return service;

});

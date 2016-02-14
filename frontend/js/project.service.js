angular.module('Portfolio')
.factory('ProjectData', function() {

  var service = {}
  service.projects = [
    {
      "id": 0,
      "name": "Parkeez Visual Identity + Website",
      "image": "assets/images/parkeez.png",
      "image2":"assets/images/",
      "image3":"assets/images/",
      "date": 2016,
      "description": "Parkeez is a parking app developed to help drivers know when and where they can park without fear of ticketing or towing. The app crowdsources its data from local users. The visual identity for Parkeez was inspired by the slow loris whose eyes resemble the look of Angelinos face when he or she finds a parking ticket on their windshield.",
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
      "image2":"assets/images/",
      "image3":"assets/images/",
      "date": 2015,
      "description": "This interactive game allows Hebrew learners to face off against each other in a race to identify the most Hebrew characters possible before time runs out.",
      "web": true,
      "design": true,
      "print": false,
      "technology": ["JavaScript", "jQuery", "HTML5", "SaSS"],
      "url": "http://aleph-bet.bitballoon.com/"
    },
    {
      "id": 2,
      "name": "Cascade Brewing Visual Identity",
      "image": "assets/images/cascade.png",
      "image2":"assets/images/",
      "image3":"assets/images/",
      "date": 2015,
      "description": "This experiment in identity re-design is meant to transform the look of a well-established brewery located in the Pacific Northwest. Cascade Brewing is best-known for its fruit-forward sour beer concoctions. Student Project.",
      "web": false,
      "design": true,
      "print": true,
      "technology": ["Adobe Illustrator", "Adobe Photoshop"]
    },
    {
      "id": 3,
      "name": "Milky Web Poster",
      "image": "assets/images/milkyweb.jpg",
      "image2":"assets/images/",
      "image3":"assets/images/",
      "date": 2015,
      "description": "“The Milky Web” is a project created to comment on the movement of society towards rearing children raised, from birth, in a tech-heavy world. In extreme cases children are given technology instead of personal attention. Poster printed on Paper. 90cm x 128cm.",
      "web": false,
      "design": true,
      "print": true,
      "technology": ["Adobe Illustrator", "Adobe Photoshop"]
    },
    {
      "id": 4,
      "name": "Mishima Concert Poster",
      "image": "assets/images/mishima.jpg",
      "image2":"assets/images/",
      "image3":"assets/images/",
      "date": 2015,
      "description": "This poster is a conceptual design for Catalan alt-rock band Mishima's performance in a Gaudi building in Barcelona, Catalunya, Spain. Poster printed on Paper. 90cm x 128 cm.",
      "web": false,
      "design": true,
      "print": true,
      "technology": ["Adobe Illustrator", "Adobe Photoshop"]
    },
    {
      "id": 5,
      "name": "CREATE Poster",
      "image": "assets/images/create.jpg",
      "image2":"assets/images/create2.jpg",
      "image3":"assets/images/create4.jpg",
      "image4":"assets/images/create4.jpg",
      "date": 2015,
      "description": "“CREATE” is a work of postive propoganda which emphasizes the importance of bringing ideas to life instead of just leaving them on paper or in your head. As designers and artists, we spend a lot of time pouring over concepts when we should probably be getting to work. Without action there is no art. Poster printed on Cloth. 60cm x 100 cm.",
      "web": false,
      "design": true,
      "print": true,
      "technology": ["Adobe Illustrator", "Adobe Photoshop"]
    },
    {
      "id": 6,
      "name": "Palette Website",
      "image": "assets/images/palette.png",
      "image2":"assets/images/",
      "image3":"assets/images/",
      "date": 2015,
      "description": "Palette is a place for creatives to post and sign up for art, design, and craft-centered classes. These classes support artists and designers who want to supplement their income by allowing them to create classes and workshops around their schedules while providing the community at large with a chance to explore new crafts.",
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
      "image2":"assets/images/",
      "image3":"assets/images/",
      "date": 2016,
      "description": "This logo was developed for a private project that is currently in the works. The idea behind Design Questions is to create a virtual space in which to pose different questions related to graphic design. Questions will be answered by an expert in the topic and then opened up to discussion in the design community at large.",
      "web": false,
      "design": true,
      "print": false,
      "technology": ["Adobe Illustrator"]
    },
    {
      "id": 8,
      "name": "Calligraphy Series",
      "image": "assets/images/neruda.jpg",
      "image2":"assets/images/",
      "image3":"assets/images/",
      "date": 2015,
      "description": "This calligraphy series is a passion project meant to pull me away from my digital life in order to reconnect with the physical. The art of calligraphy places a heightened awareness on physical space and movement. I use it as a distraction and an outlet.",
      "web": false,
      "design": true,
      "print": true,
      "technology": false
    },
    {
      "id": 9,
      "name": "Baja California Real Estate Visual Identities",
      "image": "assets/images/torza.png",
      "image2":"assets/images/",
      "image3":"assets/images/",
      "date": 2015,
      "description": "These logos were created for modern, seaside, luxury real estate developments located in Baja California, Mexico. The living spaces in Privada del Mar are more relaxed and elegant while those at Real Mediterraneo are more modern and structrual.",
      "web": false,
      "design": true,
      "print": false,
      "technology": ["Adobe Illustrator"]
    },
    {
      "id": 10,
      "name": "Asia Travel Book",
      "image": "assets/images/asia.png",
      "image2":"assets/images/",
      "image3":"assets/images/",
      "date": 2015,
      "description": "This book is a personal project meant to document my journey through Asia via text and image. Project done in collaboration with geologist/photographer Lee M. Saper.",
      "web": false,
      "design": true,
      "print": true,
      "technology": ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"]
    },
    {
      "id": 11,
      "name": "TreeStack Visual Identity",
      "image": "assets/images/treestack.png",
      "image2":"assets/images/",
      "image3":"assets/images/",
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
      "image2":"assets/images/",
      "image3":"assets/images/",
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
      "image2":"assets/images/",
      "image3":"assets/images/",
      "date": 2015,
      "description": "Customized website created to promote Dieter Rams' 10 Principles for Good Design. The website is meant to be simple, direct, and user-friendly.",
      "web": true,
      "design": true,
      "print": false,
      "technology": ["HTML5", "CSS3"],
      "url": ""
    }
  ];

  return service;

});

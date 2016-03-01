angular.module('Portfolio')
.factory('ProjectData', function() {

  var service = {}
  service.projects = [
    {
      "id": 0,
      "name": "Parkeez Visual Identity + Website",
      "image": "assets/images/parkeez.png",
      "slides":[{image: "assets/images/parkeez.gif", description:""}],
      "date": 2016,
      "description": "Parkeez is a crowdsourced parking app developed to help drivers know when and where they can park without fear of ticketing or towing. The visual identity for Parkeez was inspired by the slow loris whose eyes resemble the look on an Angelino's face when he or she finds a dreaded parking ticket on their car.",
      "web": true,
      "design": true,
      "print": false,
      "technology": ["MongoDB", "Express", "NodeJS", "JavaScript", "Google API", "SaSS", "Bootstrap"],
      "url": "http://parkeez.herokuapp.com",
      "github": "http://parkeez.herokuapp.com"
    },
    {
      "id": 1,
      "name": "Aleph Bet - Hebrew Alphabet Learning Game",
      "image": "assets/images/alephbet2.gif",
      "slides":[{image: "assets/images/alephbet.gif", description:""}],
      "date": 2015,
      "description": "This interactive game pits learners of the Hebrew alphabet (aka alephbet) against each other in a race to identify the most characters before time runs out.",
      "web": true,
      "design": true,
      "print": false,
      "technology": ["JavaScript", "jQuery"],
      "url": "http://aleph-bet.bitballoon.com/",
      "github": "https://github.com/mjolliffe/aleph-bet-learning-game"
    },
    {
      "id": 2,
      "name": "Cascade Brewing Visual Identity",
      "image": "assets/images/cascade.png",
      "slides":[{image: "assets/images/cascade_figaro_500.jpg", description:""}],
      "date": 2015,
      "description": "This student experiment in identity re-design is meant to transform the look of a well-established brewery located in the Pacific Northwest and known for its fruit-forward sour beer concoctions.",
      "web": false,
      "design": true,
      "print": true,
      "technology": ["Adobe Illustrator", "Adobe Photoshop"]
    },
    {
      "id": 3,
      "name": "Milky Web Poster",
      "image": "assets/images/milkyweb.jpg",
      "slides":[{image: "assets/images/milkyweb2.jpg", description:""}],
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
      "slides":[{image: "assets/images/mishima1.jpg", description:""},
                {image: "assets/images/mishima5.jpg", description:""},
                {image: "assets/images/mishima2.jpg", description:""}],
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
      "slides":[{image: "assets/images/Create2.jpg", description:""},
                {image: "assets/images/Create3.jpg", description:""}],
      "date": 2015,
      "description": "CREATE is a work of postive propoganda which emphasizes the importance of bringing ideas to life instead of just leaving them on paper or in your head. As designers and artists, we spend a lot of time pouring over concepts – so much so that sometimes we never bring those concepts to fruition. Without action there is no art. Poster printed on Cloth. 60cm x 100 cm.",
      "web": false,
      "design": true,
      "print": true,
      "technology": ["Adobe Illustrator", "Adobe Photoshop"]
    },
    {
      "id": 6,
      "name": "FontGen Website",
      "image": "assets/images/fontgen1.gif",
      "slides":[{image: "assets/images/fontgen2.gif", description:""}],
      "date": 2016,
      "description": "FontGen is an experiment in visual play via the art of font pairing. FontGen was created with typography enthusiasts, web developers, and designers in mind. FontGen's goal is to allow users to discover and save font pairs they love without having to scroll through thousands of type specimens. This project is still evolving.",
      "web": true,
      "design": true,
      "print": false,
      "technology": ["MongoDB", "Express", "Angular", "NodeJS", "JavaScript", "Google Fonts API", "SaSS", "Bootstrap", "ThreeJS"],
      "url": "http://fontgen.s3-website-us-west-2.amazonaws.com/#/",
      "github": "https://github.com/mjolliffe/fontgen"
    },
    {
      "id": 7,
      "name": "Design Questions Visual Identity",
      "image": "assets/images/design.png",
      "slides":[{image: "assets/images/design.png", description:""}],
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
      "slides":[{image: "assets/images/neruda.jpg", description:""}],
      "date": 2015,
      "description": "This calligraphy series is a passion project meant to pull me away from my digital life in order to reconnect myself with the physical. The art of calligraphy places a heightened awareness on space and movement. I use it as a distraction and an outlet.",
      "web": false,
      "design": true,
      "print": true,
      "technology": false
    },
    {
      "id": 9,
      "name": "Baja California Real Estate Visual Identities",
      "image": "assets/images/torza.png",
      "slides":[{image: "assets/images/torza.png", description:""}],
      "date": 2015,
      "description": "These logos were created for two modern, seaside, luxury real estate developments located in Baja California, Mexico. The living spaces in Privada del Mar are relaxed and elegant while those at Real Mediterraneo are modern and structrual.",
      "web": false,
      "design": true,
      "print": false,
      "technology": ["Adobe Illustrator"]
    },
    {
      "id": 10,
      "name": "Asia Travel Book",
      "image": "assets/images/asia.png",
      "slides":[{image: "assets/images/asia.png", description:""}],
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
      "slides":[{image: "assets/images/treestack.png", description:""}],
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
      "slides":[{image: "assets/images/nuts.png", description:""}],
      "date": 2015,
      "description": "These package label designs were developed for Providence Granola Project’s line of spiced nuts. Providence Granola Project is a nonprofit that helps train and educate refugees from around the world. Project done in collaboration with JJ St.Onge.",
      "web": false,
      "design": true,
      "print": false,
      "technology": ["Adobe Illustrator"]
    },
    // {
    //   "id": 13,
    //   "name": "10 Principles of Design Website",
    //   "image": "assets/images/dieter.jpg",
    //   "image2":"assets/images/",
    //   "image3":"assets/images/",
    //   "date": 2015,
    //   "description": "Customized website created to promote Dieter Rams' 10 Principles for Good Design. The website is meant to be simple, direct, and user-friendly.",
    //   "web": true,
    //   "design": true,
    //   "print": false,
    //   "technology": ["HTML5", "CSS3"],
    //   "url": "",
    //   "github": "https://github.com/mjolliffe/principles-of-design"
    // },
    {
      "id": 13,
      "name": "Palette Website",
      "image": "assets/images/palette4.gif",
      "slides":[{image: "assets/images/palette5.gif", description:""}],
      "date": 2015,
      "description": "Palette is a place for creatives to post and sign up for art, design, and craft-centered classes. These classes support artists and designers who want to supplement their income by allowing them to create classes and workshops around their schedules while providing the community at large with a chance to explore new crafts.",
      "web": true,
      "design": true,
      "print": false,
      "technology": ["Ruby", "Rails", "jQuery", "CSS3", "SaSS", "Bootstrap"],
      "url": "https://palette-application.herokuapp.com/",
      "github": "https://github.com/mjolliffe/palette-app"
    }
  ];

  return service;

});

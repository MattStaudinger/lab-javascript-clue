// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
frst_name:   Doctor
lst_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
ocupation:   Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
occupation:   Retired Football player

// Weapons

name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20

// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/

var MrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
};
var DrOrchid = {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: "26",
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"
};
var ProfPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: "22",
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
};
var MissScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past,",
  age: "31",
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg,",
  occupation: "Actor"
};
var MrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: "36",
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
};
var MrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: "62",
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player",
};

var Rope = { name: "rope", weight: 10 };
var Knife = { name: "knife", weight: 8 };
var Candlestick = { name: "Candlestick", weight: 2 };
var Dumbbell = { name: "Dumbbell", weight: 30 };
var Poison = { name: "Poison", weight: 2 };
var Axe = { name: "axe", weight: 15 };
var Bat = { name: "bat", weight: 13 };
var Trophy = { name: "trophy", weight: 25 };
var Pistol = { name: "pistol", weight: 20 };


var roomsArray =
  ["DinningRoom",
    "Conservatory",
    "Kitchen",
    "Study",
    "Library",
    "BilliardRoom",
    "Lounge",
    "Ballroom",
    "Hall",
    "Spa",
    "LivingRoom",
    "Observatory",
    "Theater",
    "GuestHouse",
    "Patio"];

// Characters Collection
var charactersArray = []

charactersArray.push(MrGreen, DrOrchid, ProfPlum, MissScarlet, MrsPeacock, MrMustard)

// Rooms' Collection
// is defined above


// Weapons Collection
var weaponsArray = [];
weaponsArray.push(Rope, Knife, Candlestick, Dumbbell, Poison, Axe, Bat, Trophy, Pistol)

// Random Select

function randomSelector(array) {
  var ranNum
  ranNum = Math.floor(Math.random()*array.length);
  return array[ranNum]
}

// Pick Mystery

function pickMistery() {
  var misteryEnvelope = []
  misteryEnvelope.push(randomSelector(charactersArray))
  misteryEnvelope.push(randomSelector(weaponsArray))
  misteryEnvelope.push(randomSelector(roomsArray))
  return misteryEnvelope;
}

// Reveal Mystery

function revealMistery(array) {
  var firstName = (array[0].firstName)
  var lastName = (array[0].lastName)
  var weapon = (array[1].name)
  var place = (array[2])
  return (firstName + " " + lastName +" killed Mr. Boddy using the " + weapon + " in the " + place + "!!!!");
  }
  
  console.log(revealMistery(pickMistery()))
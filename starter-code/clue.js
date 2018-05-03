var charactersArray = {
}
var Character1 = {

first_name:   "Jacob",
last_name:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:   "Entrepreneur",
}
var Character2 = {

frst_name:   "Doctor",
lst_name:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation:   "Scientist",
}

var Character3 = {

first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:          22,
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer",
}

var Character4 = {

first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor", 
}

var Character5 = {

first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité",    
}

var Character6 = { 

first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          62,
image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:   "Retired Football player",   
}

var weaponsArray = {

}
var Weapons1 = {
    name: "rope",
    weight: 10, 
}

var Weapons2 = {
    name: "knife",
    weight: 8,
}
var Weapons3 = {
    name: "candlestick",
    weight: 2,
}
var Weapons4 = {
    name: "dumbbell",
    weight: 30,
}
var Weapons5 = {
    name: "poison",
    weight: 2,
}
var Weapons6 = {
    name: "axe" ,
    weight: 15,
}
var Weapons7 = {
    name: "bat",
    weight: 13,
}
var Weapons8 = {
    name: "trophy",
    weight: 25,
}
var Weapons9 = {
    name: "pistol",
    weight: 20,
}

var RoomsArray = {

}
var Room1 = {
    name: "Dinning Room",
}
var Room2 = {
    name: "Conservatory",
}
var Room2 = {
    name: "Kitchen",
}
var Room3 = {
    name: "Study",
}
var Room4 = {
    name: "Library",
}
var Room5 = {
    name: "Billiard Room",
}
var Room5 = {
    name: "Lounge",
}
var Room6 = {
    name: "Ballroom",
}
var Room7 = {
    name: "Hall",
}
var Room8 = {
    name: "Spa",
}
var Room9 = {
    name: "Living Room",
}
var Room10 = {
    name: "Observatory",
}
var Room11 = {
    name: "Theater",
}
var Room12 = {
    name: "Guest House",
}
var Room13 = {
    name: "Patio",
}

// Characters Collection
var charactersArray = [];

charactersArray.push(Character1, Character2, Character3, Character4, Character5, Character6);

Characterlength = charactersArray.length;

aleatoriocharacters = randon(charactersArray);

// Rooms' Collection
var roomsArray = [];

roomsArray.push(Room1, Room2, Room3, Room4, Room5, Room6, Room7, Room8, Room9, Room10, Room11, Room12, Room13);

roomslength = roomsArray.length;

aleatoriorooms = randon(roomslength);

function randon(roomsArray) {
    var num = (Math.random() * roomsArray + 1);
    var num1 = (Math.round(num));
    console.log(num1);
    return num1;
    
}


// Weapons Collection
var weaponsArray = [];

weaponsArray.push(Weapons1, Weapons2, Weapons3, Weapons4, Weapons5, Weapons6, Weapons7, Weapons8, Weapons9);

weaponslength = weaponsArray.length;

aleatorioweapons = randon(weaponsArray);

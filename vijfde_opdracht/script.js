/* //objecten
let person = {
    name: "Renee",
    age: 25
};
console.log(person);

// dot notation
person.name = "Renee";
console.log(person.name);

person.age = 25;
console.log(person.age);

//bracket notation
person["name"] = "Jan";
console.log(person.name);

person["age"] = 31;
console.log(person.age);

//key-value pair
let evaluations = [7, 10, 9];
console.log(evaluations);

// arrays
let colors = ["groen", "blauw", "rood"];
console.log(colors);

//length
console.log(colors.length);

//1e element
console.log(colors[0]);

laatste element
let last = colors[colors.length - 1];
console.log(last);

//push methode
let newLength = colors.push("geel");
console.log(colors);

//object toevoegen
let newlEngth = colors.push("hi ik ben een object");
console.log(colors);

//console alleen begroeting (laastste element)
let last = colors[colors.length - 1];
console.log(last);
*/

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
        favourite_food: "fish",
        medium_liked_food: "dried fruits",
        disliked_food: "walnuts"
    }
},
{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
        favourite_food: "tuna",
        medium_liked_food: "canned food",
        disliked_food: "all fruits"
    }
},
{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_food: "meaty things",
        medium_liked_food: "tuna",
        disliked_food: "canned food"
    }
}
]

/*
// 1 log de naam van het laatste kattenras
let last = catBreeds[catBreeds.length - 1];
console.log(last); */

//2 log de energy levels van de eerste kat
console.log("energy_level:", catBreeds[0].energy_level);

//3 log het eerste temperament van de temperamenten van de tweede kat
console.log("temperament:", catBreeds[1].temperament[0]);

/*
//4 log het laatste temperament van de temperamenten van de derde kat
let last = temperament[temperament.lengt - 1];
console.log("temperament:", catBreeds[2].temperament);
*/

//5 log het favoriete voedsel van de derde kat
console.log("favourite_food:", catBreeds[2].favourite_food);
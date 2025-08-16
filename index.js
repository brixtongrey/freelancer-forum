/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

const NUM_FREELANCER = NAMES.length;

//======== STATE =======
// {length: 5}, this object tells Array.from how many times to run the map function

const freelancers = Array.from({length: NUM_FREELANCERS}, makeFreeLancer);
console.log(freelancers);

// need to create mapFunction, don't need map element, just index
function makeFreeLancer(_, index) {

    // create the array of object
    return {
        name: NAMES[index % NAMES.length],
        occupation: OCCUPATIONS[index % OCCUPATIONS.length],
        price: getRandomRate(),
    };
}

// need to create a function for price_range to get random number - used ChatGPT as guidance on below
function getRandomRate() {
    return Math.floor(Math.random()* (PRICE_RANGE.max - PRICE_RANGE.min +1)) + PRICE_RANGE.min;
} 


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

const freelancers = Array.from({length: NUM_FREELANCER}, makeFreeLancer);

// need to create mapFunction, don't need map element, just index
function makeFreeLancer(_, index) {
    console.log(index);
    // create the array of object
    return {
        name: NAMES[index],
        occupation: OCCUPATIONS[index],
        price: PRICE_RANGE[index],
        freelancers: NUM_FREELANCERS[index],
    };
}

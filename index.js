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

// TO DO: Initialize a state variable to an array of `NUM_FREELANCERS` freelancer objects.

const freelancers = Array.from({length: NUM_FREELANCERS}, makeFreeLancer);

const averageRate = getAverageRate(freelancers);
console.log(freelancers, averageRate);

// TO DO: Write a function that returns a freelancer object with a randomly generated name, occupation, and rate according to the provided constants.

function makeFreeLancer(_, index) {
// need to create mapFunction ^, don't need map element, just index

    // create the array of object
    return {
        name: NAMES[index % NAMES.length],
        occupation: OCCUPATIONS[index % OCCUPATIONS.length],
        rate: getRandomRate(),
    };
}

// need to create a function for price_range to get random number - used ChatGPT as guidance on below
function getRandomRate() {
    return Math.floor(Math.random()* (PRICE_RANGE.max - PRICE_RANGE.min +1)) + PRICE_RANGE.min;
} 

// TO DO: Write a function that returns the average rate of all freelancers in state.

function getAverageRate(freelancers) {
    const average = 
    freelancers.reduce((accum, currentRate) => {
        return accum + currentRate.rate;

    }, 0) / freelancers.length;
    return average;
}

console.log("freelancers is:", freelancers);

// TO DO: Write a component function to represent a single freelancer.
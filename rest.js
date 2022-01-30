const obj1 = {
    name: 'Whiskey',
    species: 'canine',
    cool: true,
};
/*
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}

ES2015 Version Below:
*/

const filterOutOdds = (...args) => {
    let nums = Array.prototype.slice.call(args);
    return nums.filter(num => num % 2 === 0)
}
//function called findMin that accepts a variable number of arguments and returns the smallest argument
const findMin = (...args) => {
    return args.reduce((min, curr) => Math.min(min, curr))
}

//function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object
const mergeObjects = (...args) => {
    return { ...args[0], ...args[1] }
}

//function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled
const doubleAndReturnArgs = (arr, ...rest) => {
    const doubled = rest.map(num => num * 2)
    return [...arr, ...doubled]
}

//SLICE AND DICE! 

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    const randIdx = Math.floor(Math.random() * items.length);
    const arrTop = items.slice(0, randIdx);
    const arrBott = items.slice(randIdx + 1);

    return [...arrTop, ...arrBott]
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2]

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    const extraObj = {};
    extraObj[key] = val;
    return { ...obj, ...extraObj }

}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj

}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 })


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    const extraObj = {};
    extraObj[key] = val;
    return { ...obj, ...extraObj }
}
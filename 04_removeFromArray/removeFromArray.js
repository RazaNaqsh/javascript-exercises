//lets write beautiful pseudocode in here
// 1- accessing what arguments have
// we see the first thing is always insert
//rest are to delete ones
// start a for loop that access whole loop
// when at argument[0], inside it run again a loop from arg[1]
//run a loop of to remove ele, and inside it a loop of arg[0] so that compare
//all of arg[o] elements with to del
// compare it with rest of arg elements 
// when it equals with the elements of arg[0], then do nothing
// when its not enter that into new Array!


const removeFromArray = function() { const array = args[0];

    const newArray = [];
   
    array.forEach((item) => {
      // push every element into the new array
      // UNLESS it is included in the function arguments
      // so we create a new array with every item, except those that should be removed
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    // and return that array
    return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;

//store the first insert into a var which needs to be inserted
//run a loop from arg[1], and check if it includes in tobe inserted var, then 
//do nothing else add that element into new array and return that

const removeFromArray = function(...args) {
let array=[...args[0]];
console.log(array);
let newArray= []
console.log(args);
array.forEach((item) => {
if (!args.includes(item))
{
    newArray.push(item);
}
});
return newArray;
}
;
removeFromArray([1,2,3,4],2,3);
// Do not edit below this line
module.exports = removeFromArray;

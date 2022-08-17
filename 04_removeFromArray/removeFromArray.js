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


const removeFromArray = function() {
let array =[];

for(i=1;i<arguments.length;i++){
    for(j=0;j<arguments[0].length;j++){
        if(arguments[i] !== arguments[0][j]){
            array.push(arguments[0][j]);
        }
    }
}
return array;
};
// Do not edit below this line
module.exports = removeFromArray;

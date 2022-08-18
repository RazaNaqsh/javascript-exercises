//store the first insert into a var which needs to be inserted
//run a loop from arg[1], and check if it includes in tobe inserted var, then 
//do nothing else add that element into new array and return that

const removeFromArray = function() {
let array=[...arguments[0]];
console.log(array);
let newArray=[];
let removedValue=[];
for(i=1;i<arguments.length;i++){
    for(j=0;j<array.length;j++)
    {
        if(array[j].includes(arguments[i]))
        {
            removedValue.push(array[j]);
        }
        else
        {
            newArray.push(array[j]);
        }
        console.log("inserted value :"+ newArray);
        console.log("deleted value :"+ removedValue);
    }
    return newArray;
}
};
// Do not edit below this line
module.exports = removeFromArray;

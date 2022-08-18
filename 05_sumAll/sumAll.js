//pseudocode first
// start limit given and end limit given so
// start a loop from i=start till end and just add that to sum
// so if the larger number is given first ,then create a check condition
// that if a > b then i=a and b is limit and i++
// and if b>a then i=b and a is limit and i--
const sumAll = function(num1,num2) {
let sum=0 ;
let a =num1;
let b=num2;
console.log(a,b);
if(a<0 || b<0 || typeof(b)!=="number"){
    return "ERROR";
}
else if(a < b){
    for(let i=a;i<=b;i++){
        sum+=i;
    }
}
else if( a>b){
    for(let i=b;i<=a;i++){
        sum+=i;
    }
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;

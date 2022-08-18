//pseudocode
// first lets tackle ftoc
// we take f as input and put into c formula and then round it to one dec place return it
// same with ctof, input , put formula, round off

const ftoc = function(temp) {
 let celsius = (temp-32)*5/9;
 let tempCelcius = Math.round(celsius*10)/10;
 return tempCelcius;
};

const ctof = function(temp) {
let fahrenheit= (temp*9/5)+32;
let tempFahren = Math.round(fahrenheit*10)/10;
return tempFahren;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

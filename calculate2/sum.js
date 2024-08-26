// modules protect their variables and function from leaking variables
console.log("sum executed");
var x=10;

function calculateSum(a,b){
    const sum=a+b+2;

console.log(sum);

}

module.exports={x,calculateSum};
//console.log(module);
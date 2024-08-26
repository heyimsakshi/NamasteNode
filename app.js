//  require("./xyz.js")// this line will be executed first the  3 onwards line will be executed (include one module to another module)
const {calculateSum,multiply} = require("./calculate2")

var name="Namaste Node js "
console.log(name)
var a=30;
var b=20;
 calculateSum(a,b);
 multiply(a,b);
 //let x=1;
//  console.log(x)
// console.log(name);
// console.log(a+b);


// console.log(global);
// console.log(this);
// console.log(globalThis);s
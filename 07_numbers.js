// let num1 = 105445665;
// console.log(num1);
// console.log(typeof(num1));

// //we can also define some spacific data type 

// let num2 = BigInt(Number.MAX_SAFE_INTEGER);
// console.log(num2);
// console.log(typeof(num2));

// console.log(num1.toFixed(7));

// console.log(num1.toString().split('5'));

// let num3 = 12589.5689
// console.log(num3.toPrecision(4));               //it give us precision values       "H"

// let hundred = 1000000000;
// console.log(hundred.toLocaleString('en-IN'));

// //++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++
// let arr = [1,5,8,94,4,646,-1];
// console.log(Math.round(49.642));
// console.log(Math.abs(-10.12));
// console.log(Math.ceil(1.064));
console.log(Math.floor(1.064));
// console.log(Math.pow(12,5));
// console.log(Math.min(10,8,6,4,7,2,1,-5,4,-56,-71,-4,-6));
// console.log(Math.max(10,8,6,4,7,2,1,-5,4,-56,-71,-4,-6));

// //interesting 
// console.log(Math.random());
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
console.log(Math.round(Math.random()*str.length +1));

// let min =33;
// let max = 100;
// let value = Math.random();
// console.log(Math.random() * (max-min) + min);
// console.log(value);
// console.log((value * (max-min) + min));









// //+++++++++++++++++  date  +++++++++++++++++++++++

// let dateis = new Date();
// let myd = new Date(2023,0,2);

// console.log(dateis);

// console.log(dateis.toString());
// console.log(dateis.toLocaleDateString());
// console.log(dateis.toISOString());
// console.log(myd.toString());

// let d2 = new Date("12-22-2023");
// let d3 = Date.now();
// console.log(d2.getTime());
// console.log(d3);

// console.log(d2.getMonth());
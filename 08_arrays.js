let ar1=[1,3,4,6,3,6,7,4,6];
let ar3=[5,9,4,3,8,1,0,58,86];
let ar2 = [53,79,4,53,51,65,16,75,31];
let temp = 3234;

// console.log(ar1);
// ar1.push(400);
// console.log(ar1);
// ar1.pop();
// console.log(ar1);

// ar1.shift();
// console.log(ar1);

// ar1.unshift(1);
// console.log(ar1);

// //slice

// console.log(ar2.slice(1,3));
// console.log(ar2);

// //splice


console.log(ar3.splice(1,4));
console.log(ar3);

ar3.push(ar2);
console.log(ar3);
console.log(ar3[9[2]]);

// //sprade
let arCombine = [...ar1,...ar2,...ar3];
console.log(arCombine);

console.log([...ar1,...ar2,...ar3]);

// from, of, isArray
console.log(Array.isArray("i am jainil"));
let j =Array.from(`hello i am jainil ${ar2} dfd`)
console.log(j);
console.log(Array.of(temp));



// // sorting function 
// //url = https://www.freecodecamp.org/news/how-to-sort-javascript-array-accurately/

// let array1 = [6,7,51,54,85,2];
// console.log(array1.sort());
// // here there is prblem here only first value is consider 

// console.log(array1.sort((a, b)=> a-b));
// // here in this function if a-b result is negative than 'a' is smaller than 'b' and if result is positive than the 'a' is grater than 'b' so swap 'a' and 'b'
// console.log(array1.sort((a, b)=> b-a)); // for descending










// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     let mid;
    
//     for(let i = 0; i < nums.length ; i++){
//         for(let j = i; j < nums.length ; j++){

//         }
//     }
// };
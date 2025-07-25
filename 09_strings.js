let A = 21;
let array = [1,2,3,6,4,7];
let s = "hello i am jainiL ";
let s2 = new String('hello bro how are you, what are you doing today');
let s3 = "time is money";
console.log(s[1]);
console.log(`${s.toString()} i am ${A.toString()} years old`);
console.log(s2);

//String functions

console.log(s3.__proto__);                  //functions of string which used in prototype

console.log(s2.charAt(4));                  //to find at which potition which character is present

console.log(s2.indexOf('o'));               //to find character potition in string

console.log(s3.lastIndexOf('i'));           //to find last character potition in string if multiple characters are present

console.log(array.at(5));                   //to find array values from the index

let substr = s2.substring(0,8);             //it is use to print or assign some part of string to 
console.log(substr);                        //the suntax of this is  ->  string_variable_name.substring(startingIndex,endingIndex);

let slice = s3.slice(-11,-1);               //this is also like substring but in this we can use negative numbers also
console.log(slice);

let trimeIt = "    hello how are you";
console.log(trimeIt.trim());                //it trim the spaces from the string

let url = "https://www.jai nil patel.in";
console.log(url.replaceAll(" ","-"));       //the replace is use to search the values from the string and replace with some character

let start = "jay shree ram";
console.log(start.startsWith("ram",10));    //it is use to check the given string is starting with this characters or not we can also check from the another positions

console.log(start.endsWith("shree",9));     //is search from the end

console.log(start.includes("ramji"));       //using this we can check this keyword is present or not

console.log(url.split('j'));                //we can split all the string based on some condition
let split1 = url.split(' ');
console.log(split1);

console.log(typeof(s3));
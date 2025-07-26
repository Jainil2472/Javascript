let uniq = Symbol("hello")

let student1 = {
    name: {
        first_name : "patel",
        Lasr_name : "jainil"
    },
    roll_no: 102,
    sem : 5,
    subjects : ["javaScript","android","DSA"],
    "div or block" : "A",
    [uniq] : "i am uniq"
};
let student2 = {
    name2: "harshil",
    roll_no2: 103,
    sem2: 5,
    subjects2 : ["javaScript","android","DSA"],
    "div or block2" : "B",
};

//1
console.log(student1.sem);
//console.log(student1.div or block);  we can not acess using this method  
//2
console.log(student1["name"]);
console.log(typeof student1["div or block"]);
console.log(student1[uniq]);     // thats how we call the symbol 

// to freeze
// student1.name = "hill";
// console.log(student1["name"]);
// // Object.freeze(student1);
// student1.name = "parth";
// console.log(student1["name"]);

//greeting
student1.greeting = function(){

    console.log(`hello i am ${this.name}`);
    console.log(`hello my friend nme is  ${student2.name2}`);


}
console.log(student1.greeting());    //in this function executed
console.log(student1.greeting);      //in this function doesnot executed only reference is given as output

//combine two object in one object
let combo = {...student1,...student2};
console.log(combo);

//array's object
let ao = [
    {
        id:1,
        name:"jainil"
    },
    {
        id:1,
        name:"jill"
    },
    {
        id:1,
        name:"jay"
    }
];
console.log(ao[1].name);

//to get only keys or values from the object 
console.log(Object.keys(student1));
console.log();

console.log(Object.values(student1));
console.log();

console.log(Object.entries(student1));      // it give us first key and then values

//to find it has propert or not 
console.log(student1.hasOwnProperty("subjects"));


//we can also destructure the object 
let {name : nam} = student1         //this is use in react 
console.log(nam); 

/* lets talk json 

    in json every thing is given in object and array
    like 
    object:-
    {
        name : "xyz"
        id : "123"
    }
    array:-
    [
        {
        name : "xyz"
        id : "123"
        }
        {
        name : "xyz"
        id : "123"
        }
    ]

    etc....

*/

function name(...num) {
    console.log(num[0],num[1],num[2],num[3] + " hello");
    
}

let arr = [1,2,3,4];
name(...arr);


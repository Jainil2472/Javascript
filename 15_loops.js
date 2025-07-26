arr1 = [8,69,56,533,79895,98,84,63,56,44];
arr2 = [2,84,21,34,15,9,52];
obj = {
    first_name:"patel",
    last_name:"jainil",
    mob_no:9712220477,
    email:"pjainil@gmail.com"
}

let mp = new Map();
mp.set("no1","jainil");
mp.set("no2","priyank");
mp.set("no3","raj");


arr3 = [
    {
        "DEP_name": "IT",
        "placed":"50%"
    },
    {
        "DEP_name": "computer",
        "placed":"70%"
    },
    {
        "DEP_name": "chemical",
        "placed":"88%"
    }
]


// if (3===3){
//     console.log("true");
// }
// if (2!=3) console.log("yes it is not equal"),
// console.log("because it is 2 and 3");

// // for loop

// for(let i = 1; i<=10 ; i++){
//     console.log("hello"+i+1+1-1);
// }

// for_of loop 


for (const i of arr1) {
     console.log(i);
}

// for_in

for (const [key,values] in obj) {
    
    // console.log(key,values);

}
//we can also use in array
for (const key in arr1) {
    // console.log(arr1[key]);
}


for (const i of arr1) {
    // console.log(i);
}


// for_in and for_of loop in map 
// console.log(mp);
for (const i of mp) {
    // console.log(i);
}

for (const key in mp) {
    // console.log(key[mp]);
}


arr1.forEach(function (i){
    // console.log(i);
});

console.log("i am here");

arr1.forEach((i)=>{
    console.log(i);
});

function name(p) {
    console.log(p);
}
arr2.forEach(name);

arr3.forEach((val,key)=>{
    console.log(val.placed,val.DEP_name);
    console.log(key);
})




// foreach with arrow function

let array1=[1,5,9,3,7,4,6,2];
array1.forEach((i)=>{

    console.log(i);
    
})
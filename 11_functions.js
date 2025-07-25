console.log(first);
console.log(x); //hoisting


function first (num1){ //here the num1 is called parameter 
    console.log(num1+num1);
}
first(12);       //here the number is argument 
var x =10;
console.log(x);
function rest_use(...allNum) {
    return allNum;
}


console.log(rest_use(15,"hello",true));
//objest as argument 

let product = {
    name: "laptop cover",
    price: 300,
    id : "P1",
    delivered : true
}

function delivered(...d) {
    if(d.delivered==true){
        console.log(`your ${d.name} is delivered`);
    }else{
        console.log(`your ${d.name} is not delivered yet`);
    }
}
let {name: n} = product;
let {delivered : d1} = product;
delivered(n,d1);


let j = function ex(num){      // this is also called as expression but here catch is you must need to call this expression after you create this
    return num;
};
console.log(j(10));
console.log(j(1000));

var k = function (num){      // this is also called as expression but here catch is you must need to call this expression after you create this
    return num;
};


function obj() {
    return product;
}
console.log(obj());

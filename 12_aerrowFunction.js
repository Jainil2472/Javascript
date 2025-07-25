//this
let num1 = 10, num2 = 40;
console.log(this);

let obj1 = {

    name: "jainil",
    online: true,
    message: function () {
        console.log(`hello ${this.name} how are you`);
        console.log(this);
    }

} 
obj1.message();

let aerow = (num1,num2) => num1+num2;
row = (num1,num2) => num1+num2;
console.log(aerow(num1,num2))
console.log(row(num1,num2))

login=() => ({name:"jainil"});          //imp

console.log(login());
console.log(typeof(row()));



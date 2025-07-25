(function hello() {             //this is name iife
    console.log("hello");
})();                          //here you must need to add the ";" then your second code will execute

(function hello2(name) {
    console.log(`hello ${name} how are you`);
})("jainil");
((name)=> {                                     //this is un name iife
    console.log(`hello ${name} how are you`);
})("ramu");

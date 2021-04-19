
//1. Function defination
function sayName(name,cb){ // name is formal arg
    console.log(` Hello  ${name} `);
    cb(name);
}

//Let create a cbfn
function sayHowAreYou(n){ // n is formal arg
    console.log('How are you '+ n);
}

//2. Fuction calling
let x = "Anil";
sayName(x,sayHowAreYou); // 'Anil' is actual arg
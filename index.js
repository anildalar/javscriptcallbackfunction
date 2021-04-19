//Hello OKLABS How are you
//Function Defination
function sayName(name,xyz){ // name is formal arg
    console.log('Hello '+name);
    xyz();
}
function sayHow(){
    console.log('How are you');
}
//Call the function
sayName('OKLABS',sayHow); //Actual Arg // Callback function


function greet() {
    console.log('Hello world');
}

function sayName2(name) { // name is formal arg
    console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(greet, 2000); //2 sec
sayName2('ANIL'); //Actual Arg

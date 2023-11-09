const myGreeting = function(name) {
    return "Hello" + " " + name
};

console.log(myGreeting("Kyle"));


const circumference = function(diameter) {
    let pi = 3.14;
    let circumference1 = pi * diameter;
    return "The circumference is " + circumference1
}

console.log(circumference(10));


const function1 = function() {
    console.log();
    console.log(function2());
}

console.log(function2())

const function2 = function() {
    console.log();
} 

// This gives an error due to function2 not being defined prior to the call to a function


const function3 = function() {
    return function4();
}

const function4 = function() {
    return function3();
}

console.log(function3());
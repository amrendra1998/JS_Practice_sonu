const person = {
    fullname: "Amrendra kumar",
    Education: "B.tech in cs",
    year: "2022",
}

// Freeze the object after adding methods
Object.freeze(person);

// console.log(person.Education); // Output: B.tech in cs

// Call the methods
// person.greeting(); // Output: Hello world!
// person.greeting2(); // Output: Hello JS user, B.tech in cs

const obj1 = {1: "one", 2: "two", 3: "three"};

const obj2 = {4: "four", 5: "five", 6: "six"};

// const obj3 = Object.assign( obj1, obj2);

// console.log(obj3); 

// const obj3  = {...obj1, ...obj2}; --> Spread operator
// console.log(obj3);

console.log(Object.keys(obj1)); 
console.log(Object.entries(obj1));


console.log(person);
// Destructuring the object
const {fullname, Education} = person;
console.log(fullname); 
console.log(Education);
console.log(person.year);

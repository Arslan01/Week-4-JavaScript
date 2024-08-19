
// 1. MAp method

// const arrnew= ["a","b","c","d","e"]
// arrnew.map((valuenew,indexnew,wholearray)=>{
//     console.log(`this is index${indexnew}:${valuenew}`)

// })


//Object in js

const object ={
    username: "Arslan",
    email: "arslan@gmail.com",
    Age: '25',
    address: {city:"Lahore",
        street:"abc, lhr,pk"
    }

};

console.log(object["username"]["address"]);

const {
    username,
    Age,
    email,
    address: {city,street},
}= object;

console.log(username,city,street)

const arrray1 =[1,2,3]
const array2 = [4,5,6]

const array6 =[...array2, ...array2];

console.log(array6);

//Add
//Reduce

const array7 =[ 5,6,7,8,9];
const initialvalue = 0;

const reducevalue = array7.reduce((accumlator,currentvalue)=>{
    console.log("acc:",accumlator, "cv:",currentvalue);
    return accumlator+ currentvalue;

},initialvalue);
console.log(reducevalue);


//for in loop itereates over the object properties 
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}


//for of loop 
const arr = [10, 20, 30, 40];

for (let value of arr) {
    console.log(value);
}

//spread operator 
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

console.log(arr2); // [1, 2, 3, 4, 5, 6]


//rest operator 

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

//map method
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);

console.log(squared); // [1, 4, 9, 16]

//object method

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2021
};

console.log(car.brand); // "Toyota"

//nested objects

const user = {
    name: "Alice",
    address: {
        city: "Wonderland",
        street: "Queen's Road",
        zip: 12345
    }
};

console.log(user.address.city); // "Wonderland"


//string methods
const str = "Hello, World!";

// String length
console.log(str.length); // 13

// Convert to uppercase
console.log(str.toUpperCase()); // "HELLO, WORLD!"

// Check if string includes a substring
console.log(str.includes("World")); // true

// Replace a substring
console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"

// Split the string into an array
console.log(str.split(", ")); // ["Hello", "World!"]

//recursive function
function flattenObjectValues(obj) {
    let result = [];
  
    function recurse(current) {
      if (typeof current === 'object' && current !== null) {
        const values = Object.values(current);
        for (const value of values) {
          if (typeof value === 'object' && value !== null) {
            recurse(value);
          } else {
            result.push(value);
          }
        }
      }
    }
  
    recurse(obj);
    return result;
  }

  //map on nested array  // nsted map

  var scores = [1, [2, 7, [8, 10]], [13, 47], [55, 77]];
// it's important for this function to have a name so we can refer to itself in the function body
scores.map(function mapper(s) {
  if (Array.isArray(s)) {
    return s.map(mapper);
  }
  else {
    return s * 3;
  }  return scores; 

})
// [ 3, [ 6, 21, [ 24, 30 ] ], [ 39, 141 ], [ 165, 231 ] ]

var array = [[1, 2], [3, 4]];
var doubledArray = _.map(array, function (nested) {
    return _.map(nested, function (element) {
        return element * 2;
    });
});

//every


//sum 
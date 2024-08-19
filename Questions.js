//Questions #1
//Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.

function check(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

// Example usage:
console.log(check(7));  // Output: "Equal"
console.log(check("7")); // Output: "Not Equal"
console.log(check(10));  // Output: "Not Equal"


//Question #2
//Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.


function checkRange(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

// Example usage:
console.log(checkRange(30));  // Output: "Yes"
console.log(checkRange(25));  // Output: "Yes"
console.log(checkRange(50));  // Output: "Yes"
console.log(checkRange(24));  // Output: "No"
console.log(checkRange(51));  // Output: "No"


//Question #3
// Change the chained if/else if statements into a switch statement.
// You should not use any else statements anywhere in the editor
// Waiting:You should not use any if statements anywhere in the editor
// Waiting:You should have at least four break statements
// Waiting:chainToSwitch("bob") should return the string Marley
// Waiting:chainToSwitch(42) should return the string The Answer
// Waiting:chainToSwitch(1) should return the string There is no #1
// Waiting:chainToSwitch(99) should return the string Missed me by this much!
// Waiting:chainToSwitch(7) should return the string Ate Nine
// Waiting:chainToSwitch("John") should return "" (empty string)
// Waiting:chainToSwitch(156) should return "" (empty string)function chainToSwitch(val) {

function chainToSwitch(val){
    let answer = "";

    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
        default:
            answer = "";
            break;
    }

    return answer;

}
// Example usage:
console.log(chainToSwitch("bob"));  // Output: "Marley"
console.log(chainToSwitch(42));     // Output: "The Answer"
console.log(chainToSwitch(1));      // Output: "There is no #1"
console.log(chainToSwitch(99));     // Output: "Missed me by this much!"
console.log(chainToSwitch(7));      // Output: "Ate Nine"
console.log(chainToSwitch("John")); // Output: ""
console.log(chainToSwitch(156));    // Output: ""


// mutadit: changes original value in array or non mutadit difference and its method 
// difference between 
// find or filter
// splice or slice
// push and pop
// shallow copy and deep copy
const x =[1,2,3,,4,5,"this a string"];
x[5] =6;
x.push(7);
x.pop();
x.unshift(0);
x.shift();
console.log(x);
for (let i=0 ; i<x.length;i++){
    console.log(x[i]*2);

}

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result);

const values = [3, 10, 18, 20];
const results = ages.filter(checkAdult);

function checkvalues(values) {
  return age > 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAge);
}



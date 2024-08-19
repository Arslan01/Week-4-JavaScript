
//examples of javascript methods 
//push, pop, slice,shift,unshift,.toString,concat,flat,splice,add,
//search method
//filter, include,search,indexOf, find, lastindexof,
//sorting methods
//reversesort,sort,math.max,math.min(),
//map,foreach,filter, reduce,every,sum,ease,spread

//Array Methods
//1. push
//Adds one or more elements to the end of an array.

let val = [1, 2, 3];
val.push(4, 5);
console.log(val); // [1, 2, 3, 4, 5]

//2. pop
//Removes the last element from an array and returns that element.

let arr = [1, 2, 3];
let lastElement = arr.pop();
console.log(lastElement); // 3
console.log(arr); // [1, 2]

//3. slice
//Returns a copy of a portion of an array into a new array object.

let x = [1, 2, 3, 4, 5];
let slicedx = x.slice(1, 3);
console.log(slicedx); // [2, 3]

//4. shift
//Removes the first element from an array and returns that element.

let y = [1, 2, 3];
let firstElement = y.shift();
console.log(firstElement); // 1
console.log(y); // [2, 3]

//5. unshift
//Adds one or more elements to the beginning of an array.

let z = [1, 2, 3];
z.unshift(0);
console.log(z); // [0, 1, 2, 3]

//6. toString
//Returns a string representing the array and its elements.

let a = [1, 2, 3];
let st = a.toString();
console.log(st); // "1,2,3"
//7. concat
//Merges two or more arrays.

let arr1 = [1, 2];
let arr2 = [3, 4];
let mergedArr = arr1.concat(arr2);
console.log(mergedArr); // [1, 2, 3, 4]

//8. flat
//Flattens a nested array.

let b = [1, [2, [3, 4], 5]];
let flatArr = b.flat(2);
console.log(flatArr); // [1, 2, 3, 4, 5]

//9. splice
//Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

let array = [1, 2, 3, 4, 5];
array.splice(2, 1, 'a', 'b');
console.log(array); // [1, 2, 'a', 'b', 4, 5]

//String Methods
//10. includes
//Determines whether one string may be found within another string.

let string = "Hello, world!";
let result = str.includes("world");
console.log(result); // true

//11. indexOf
//Returns the index within the calling String object of the first occurrence of the specified value.

let str1 = "Hello, world!";
let index1 = str1.indexOf("world");
console.log(index1); // 7

//12. lastIndexOf
//Returns the index within the calling String object of the last occurrence of the specified value.

let str = "Hello, world! Hello again!";
let lastindex = str.lastIndexOf("Hello");
console.log(lastindex); // 13

//Higher-Order Array Methods
//13. map
//Creates a new array with the results of calling a provided function on every element in the calling array.

let ar = [1, 2, 3];
let mappedArr = ar.map(x => x * 2);
console.log(mappedArr); // [2, 4, 6]

// 14. forEach
// Executes a provided function once for each array element.


let arrays = [1, 2, 3];
arrays.forEach(x => console.log(x));
// Output: 1 2 3

//15. filter
//Creates a new array with all elements that pass the test implemented by the provided function.

let c = [1, 2, 3, 4, 5];
let filteredArr = c.filter(x => x > 2);
console.log(filteredArr); // [3, 4, 5]

//16. reduce
//Applies a function against an accumulator and each element in the array to reduce it to a single value.

let d = [1, 2, 3, 4];
let sum = d.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

//17. every
//Tests whether all elements in the array pass the test implemented by the provided function.

let arra = [1, 2, 3, 4, 5];
let allGreaterThanZero = arre.every(x => x > 0);
console.log(allGreaterThanZero); // true

//18. find
//Returns the value of the first element in the array that satisfies the provided testing function.

let ac = [1, 2, 3, 4, 5];
let foundElement = ac.find(x => x > 3);
console.log(foundElement); // 4

//Sorting Methods
//19. reverse
//Reverses the elements of an array in place.


let ab = [1, 2, 3];
arr.reverse();
console.log(ab); // [3, 2, 1]

//20. sort
//Sorts the elements of an array in place and returns the sorted array.

let de = [3, 1, 4, 1, 5];
arr.sort();
console.log(de); // [1, 1, 3, 4, 5]
//21. Math.max
//Returns the largest of zero or more numbers.

let max = Math.max(1, 2, 3);
console.log(max); // 3

//22. Math.min
//Returns the smallest of zero or more numbers.
let min = Math.min(1, 2, 3);
console.log(min); // 1

//Other Useful Methods
//23. spread
//Allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

let f = [1, 2, 3];
let array2 = [...f, 4, 5];
console.log(array2); // [1, 2, 3, 4, 5]

//24. some
//Tests whether at least one element in the array passes the test implemented by the provided function.

let even = [1, 2, 3, 4, 5];
let hasEvenNumber = even.some(x => x % 2 === 0);
console.log(hasEvenNumber); // true

//25. findIndex
//Returns the index of the first element in the array that satisfies the provided testing function.

let fin = [1, 2, 3, 4, 5];
let index = fin.findIndex(x => x > 3);
console.log(index); // 3

//26.Map


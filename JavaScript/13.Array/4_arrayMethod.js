//1. push();
let fruits  = ["Apple","Mango"];
fruits.push("Banana");
console.log(fruits);

//2. pop(); 
fruits.pop(); // remove last element 
console.log(fruits);

//3. shift() 
// Remove the first elements 
fruits.shift();
console.log(fruits); 


//4. unshift() 
// Adds elements to the beginning 
let fruit1  = ["Apple","Mango"];

fruit1.unshift("Banana")
console.log(fruit1);

//5. splice() 
// adds, removes, or replaces elements in the original array 
// syntax 
// Array.splice(startTransition, deletecount, item1, item2)

// remove 
fruit1.splice(1,2);
console.log(fruit1);

let arr = [10,20,30,40,50];
arr.splice(1,2);
console.log(arr);

// insert 
let arr1 = [10,40];
arr1.splice(1,0,20,30);
console.log(arr1);

// Replace 

let arr2 = [10,20,30];
arr2.splice(1,1,50);
console.log(arr2);


//6. slice() 
// Returns a portion of an array without changing the origianl array 

let arr3 = [10,20,30,40,50];
console.log(arr3.slice(1,4));

//7. concat() 
// joins two or more arrays 

let a = [1,2];
let b = [3,4];
console.log(a.concat(b));


//8. join() 
// Converts an array into a string 

let fruits1 = ["Mango","Banana"];
console.log(fruits1.join("-"));

//9. reverse() 
// Reverse the origianl array 

let arr4 = [1,2,3];
arr4.reverse();
console.log(arr4);

//10. sort() 
// sorts elements 

let arr5 = [30,10,20];
arr5.sort();
console.log(arr5);

// Numeric Sort 

let arr6 = [30,10,20];
arr6.sort((a,b)=>a-b);  //  (30,10) = > 20
console.log(arr6);


//11. includes() 

// checks whether an element exists. 

let fruits2 = ["Apple","Mango"];

console.log(fruits2.includes("Apple"));
console.log(fruits2.includes("apple"));


//12. indexOf() 
// Returns the first index of an element 

let arr7 = [10,20,30];
console.log(arr7.indexOf(20));


//13. find() 

// Returns the first matching element 

let numbers = [5,10,15,20];
let result = numbers.find(num => num>10);
console.log(result);

//14. filter();
// Returns all matching elemnets 

let numbers1 = [5,10,15,20];
let result1 = numbers1.filter(num => num>10);
console.log(result1);


//16. map()
// Creates a new arary after modifying every elemnets. 


let numbers2 = [1,2,3];
let result2 = numbers2.map(num => num*2);
console.log(result2);

//17.  reduce() 
// Reduces the array to a single value 

let numbers3 = [1,2,3,4];

let sum = numbers3.reduce((total, num)=> total+num,0)
console.log(sum);


//18. every()

// Checks whether all elements satisfy a condition 

let marks = [80,90,95];
console.log(marks.every(marks => marks>=79));


//19. some() 

// Checks whether at least one element statisfied a condition 

let marks1 = [80,90,95];

console.log(marks1.some(marks1 => marks1 < 81));

//20. flat() 
// Flattens nested arrays. 

let arr8 = [1,[2,3],[4,[5]]];
console.log(arr8.flat()); // single array 

// Flat with Depth 

console.log(arr8.flat(2));


//21. flatMap() 

// Maps each elements and then flattens the result by one level 


let arr9 = [1,2,3];
let result3 = arr9.flatMap(num => [num, num*2]);
console.log(result3);



// break and continue in for of loop
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let value of array2) {
//     if (value === 5) {
//         break;
//     }   
//     console.log(value);
// }

// continue in a for-of loop
for (let value of array2) {
    if (value === 5) {  
        continue;
    }
    console.log(value);
}
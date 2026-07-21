// break in a for-in loop
// array1= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let k in array1) {
//     if (array1[k] === 5) {  
//         break;
//     }
//     console.log(array1[k]);
// }

// continue in a for-in loop
array1= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let k in array1) {
    if (array1[k] === 5) {
        continue;
    }
    console.log(array1[k]);
}
var obj ={
    // key:value 
    suraj:34,
    kamlesh:23,
    deepak:21,
    tikam:12,
    subham:32
}

// accessing keys by default 
// for(let result in obj){
//     console.log(result);  // keys
// }

// accessing keys and values both 
// for(let result in obj){
//     console.log(result, ":",obj[result]);  // keys
// }


// by default it display index value of array
var numbers = [3,4,5,6,7,8,1,2,3,4,5];

for (var i in numbers){
    // console.log(i);  // index value as key 
    // console.log(numbers[i]);  // values 
    console.log(i,":",numbers[i]);  // key:value
}

// break statement is used to terminate the loop when a specified condition is met.

// var i = 1;


// while(i<=10){
//     console.log(i);
//     if (i==5){
//         break;
//     }
//     i+=1;
// }



// continue statement is used to skip the current iteration of the loop when a specified condition is met.

var j = 1;

while (j<=10){
    if (j==5){
        j+=1;
        continue;
    }
    console.log(j);
    j+=1;
}
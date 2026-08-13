let text = "Java";

text[0] = "K";
console.log(text);


text = "K" + text.slice(1);
console.log(text);  // Kava 


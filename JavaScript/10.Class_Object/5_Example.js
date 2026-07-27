// Example 5 

class Circle{
    constructor(radius){
        this.radius = radius;
    }
    area(){
        var area = Math.PI * this.radius * this.radius;
        return `Area of Circle is: ${area.toFixed(2)} cm²`;
    }
}
let c1 = new Circle(5);
console.log(c1.area());
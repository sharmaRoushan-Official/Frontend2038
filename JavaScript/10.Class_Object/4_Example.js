// Example 4: Rectangle Area

class Rectangle{
    constructor(length,breadth){
        this.length = length;
        this.breadth = breadth;
    }
    area(){
        var area = this.length * this.breadth;
        return `Area of Rectangle is: ${area} cm²`;

    }
    perimeter(){
        var perimeter = 2 * (this.length + this.breadth);
        return `Perimeter of Rectangle is: ${perimeter} cm`;
    }
}
let r1 = new Rectangle(10,20);
console.log(r1.area());
console.log(r1.perimeter());
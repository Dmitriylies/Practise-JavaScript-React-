'use strict';
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }                                       //концепция

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle{
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет:${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'hello', 'red');

div.showMyProps();
console.log(div.calcArea());


const square = new Rectangle(10, 10);      //экземпляры
const long = new Rectangle(10, 32);

console.log(square.calcArea());
console.log(long.calcArea());
import svg from "../../index.js"
//I need to figure out how to format the file so that it has
//a filled shape in the background with 3 large initials

class Shapes {
    constructor(fillColor){
        this.fillColor = fillColor;
    }

}
// //Triangle with certain dimensions and fill to be any color a user chooses
// // const triangle = new Triangle(data) {
class Triangle extends Shapes {
    constructor(fillColor, sideA, sideB, sideC){
        super(fillColor);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
        
}


// // };
// // shape.setColor(answers.shapeColor);
// // expect(triangle.render()).toEqual('polygon points-"150, 18 244, 182 56, 182" fill="'+ answers.shapeColor + '"/>')

// // ///Square with the same dimensions and fill to be any color a user chooses
class Square extends Shapes {
    constructor(fillColor, sideA, sideB, sideC, sideD){
        super(fillColor);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        this.sideD = sideD;
    }
        
}


//or a Circle with the same dimensions and fill to be any color a user chooses
class Circle extends Shapes {
    constructor(fillColor, radius){
        super(fillColor);
        this.radius = radius;
    }
        
}


function renderShape () {
    if (svg.shape === "Triangle") {
        const triangle = new Triangle(svg.fillColor, 5, 5, 5)
    } else if (svg.shape === "Square") {
        const square = new Square(svg.fillColor, 5, 5, 5, 5)
    } else if (svg.shape === "Circle") {
        const circle = new Circle(svg.fillColor, 2.5)
    }
}
//how will the svg file know how big to make the shapes and how to construct them?


//Test
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
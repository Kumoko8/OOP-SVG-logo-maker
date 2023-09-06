class Shape {
    constructor (text, textColor, shapeColor ) {
        this.text = text;
        this.textColor = textColor;
         this.shapeColor = shapeColor;
    }

    getSVG() {
        throw new Error ('this method must be used in inherited classes')
    }
}

class Circle extends Shape {
    constructor(radius, text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.radius = radius;
    }
  
    getSVG() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="${this.radius}" fill="${this.shapeColor}" />
        <text x="150" y="${this.radius * 2 - 35}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
    }
  }
  
  class Triangle extends Shape{
    constructor(sideLength, text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.sideLength = sideLength;
    }
  
    getSVG() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="${this.sideLength},20 ${this.sideLength + 100},${this.sideLength + 30} ${this.sideLength / 3},${this.sideLength + 30}" fill="${this.shapeColor}" />
        <text x="${this.sideLength}" y="${this.sideLength - 5}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
    }
  }
  
  class Square extends Shape{
    constructor(sideLength, text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.sideLength = sideLength;
    }
  
    getSVG() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="${this.sideLength}" y="${this.sideLength}" width="${this.sideLength * 4}" height="${this.sideLength * 4}" fill="${this.shapeColor}" />
        <text x="${this.sideLength * 3}" y="${this.sideLength * 3}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
    }
  }
  
 
  export { Shape, Circle, Triangle, Square };
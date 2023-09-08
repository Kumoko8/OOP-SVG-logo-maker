import { Shape, Circle, Triangle, Square } from '../shapes';

describe('Shape class', () => {
  test('Shape constructor sets properties correctly', () => {
    const shape = new Shape('txt', 'Red', 'Blue');
    expect(shape.text).toBe('txt');
    expect(shape.textColor).toBe('Red');
    expect(shape.shapeColor).toBe('Blue');
  });

});

describe('Circle class', () => {
  test('Circle constructor sets properties correctly', () => {
    const circle = new Circle(10, 'txt', 'Green', 'Yellow');
    expect(circle.radius).toBe(10);
    expect(circle.text).toBe('txt');
    expect(circle.textColor).toBe('Green');
    expect(circle.shapeColor).toBe('Yellow');
    
  });

});

describe('Triangle class', () => {
    test('Triangle constructor sets properties correctly', () => {
        const triangle = new Triangle(10, 'txt', 'Green', 'Yellow');
        expect(triangle.sideLength).toBe(10);
        expect(triangle.text).toBe('txt');
        expect(triangle.textColor).toBe('Green');
        expect(triangle.shapeColor).toBe('Yellow');
        
      });
    
      test('Triangle render method generates SVG for a triangle', () => {
        const triangle = new Triangle(20, 'txt', 'Green', 'Yellow');
        const svg = triangle.render();
        // Add assertions here to check if the generated SVG is as expected
      });
});

describe('Square class', () => {
    test('Square constructor sets properties correctly', () => {
        const square = new Square(10, 'txt', 'Green', 'Yellow');
        expect (square.sideLength).toBe(10);
        expect(square.text).toBe('txt');
        expect (square.textColor).toBe('Green');
        expect (square.shapeColor).toBe('Yellow');
        
      });
    
});

import inquirer from "inquirer";

inquirer
    .prompt([
        {
            type:"input",
            name: "brandInitials",
            message: "What initials would you like in your logo?",
            maxLength: 3
        },
        {
            type: "input",
            name: "textColor",
            message: "What color would you like the initials to be?"
        },
    
        {
            type: "list",
            name: "shape",
            message: "What shape would you like your logo to be?",
            choices: ["Square", "Circle", "Triangle"]
        },
        {
            type:"input",
            name: "shapeColor",
            message: "What color would you like your shape to be?"
        }
        
    ])
    .then((answers) => {const svg = new Svg(answers.brandInitials, answers.textColor, answers.shape, answers.shapeColor)})

    class Svg {
        constructor(brandInitials, textColor, shape, shapeColor) {
            this.brandInitials = brandInitials;
            this.textColor = textColor;
            this.shape = shape;
            this.shapeColor = shapeColor;
        }
     }
        Svg.prototype.render = function () {
        }
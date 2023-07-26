const {default: inquirer} = import("inquirer");
import fs from "fs";

import svgContent from "./lib/functions/shapes.js";
// import generateLogo from "./lib/functions/generateLogo.js";

function prompts () {
//the prompt will get the information for the logo
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
    //these answers become stored in an object 
    .then((answers) => {
        const svg = new Svg(
            answers.brandInitials, 
            answers.textColor, 
            answers.shape, 
            answers.shapeColor)})
}
//defines the results of the prompts
    class Svg {
        constructor(brandInitials, textColor, shape, shapeColor) {
            this.brandInitials = brandInitials;
            this.textColor = textColor;
            this.shape = shape;
            this.shapeColor = shapeColor;
        }
     }
     //defining the Svg object

        Svg.prototype.render = function () {
        
                fs.writeFile("./Assets/logo.svg", svgContent, (err) => {
                    if (err) {
                        console.error("Error writing file:", err);
                    } else {
                        console.log("SVG rendered successfully");
                    }
                   
                 })
               
              }

            
        
    //using a function to render the svg file based on the results of the prompt (answers)

    //initial function

    function init () {
       prompts();
        
    }
    init();

    export default svg;
import inquirer from "inquirer";
import fs from "fs";
import { Circle, Triangle, Square } from "./lib/functions/shapes.js";

// const inquirer = require('inquirer');
// const fs = require('fs');
// const { Circle, Triangle, Square } = require('./lib/functions/shapes.js');

const questions = [

    {
        type: "list",
        name: "shape",
        message: "What shape would you like your logo to be?",
        choices: ["Circle", "Triangle", "Square"]
    },

        {
            type:"input",
            name: "text",
            message: "What initials would you like in your logo (up to 3)?",
            maxLength: 3
        },
        {
            type: "input",
            name: "textColor",
            message: "What color would you like the initials to be (keyword or hexadecimal)?"
        },
    
        
        {
            type:"input",
            name: "shapeColor",
            message: "What color would you like your shape to be?"
        }
        
    ]

    let shape;

    async function generateShape() {
        try {
          const answers = await inquirer.prompt(questions);
      
          switch (answers.shape) {
            case 'Circle':
              shape = new Circle (80, answers.text, answers.textColor, answers.shapeColor);
              break;
            case 'Triangle':
              shape = new Triangle (150, answers.text, answers.textColor, answers.shapeColor);
              break;
            case 'Square':
              shape = new Square (50, answers.text, answers.textColor, answers.shapeColor);
              break;
            default:
              console.error('Invalid shape type');
              return;
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }

        const svgCode = shape.render();
          const filePath = './Assets/logo.svg';

          fs.writeFile(filePath, svgCode, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log(`SVG file saved as ${filePath}`);
          });

      }
      
      // Start the prompt
      generateShape();
    


    


            
        
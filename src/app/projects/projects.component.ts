import { Component } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';

@Component({ 
    styleUrls: ['projects.component.css', '../app.component.css'],
    templateUrl: 'projects.component.html' })
export class ProjectsComponent {
    foodDesc: string = "";
    sudokuDesc: string = "";
    thirdDesc: string = "";

    descriptionArray: string[] = [
        "This project helped me learn about utilizing SQL statements in a java program. I used JavaFX to create the GUI which I most utilized Scene Builder to generate the components",
        "Funnily enough, I had to do a Sudoku Solver for class the semester after making this. Sadly, it was in Java while I did this in Python.",
        "This project was for a Computer Engineering class. We had to design an instruction-fed calculator in VHDL with addition and subtraction capabilities at the RTL level. It's also capable of skipping instructions"
    ];

    mouseEnter(div : number){
        if(div == 0) {
            this.foodDesc = this.descriptionArray[div];
        }
        if(div == 1) {
            this.sudokuDesc = this.descriptionArray[div];
        }
        if(div == 2) {
            this.thirdDesc = this.descriptionArray[div];
        }
     }
  
     mouseLeave(){
       this.foodDesc = "";
       this.sudokuDesc = "";
       this.thirdDesc = "";
     }
}
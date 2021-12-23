import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-projects-data',
  templateUrl: './projects-data.component.html',encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./projects-data.component.css']
})
export class ProjectsDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  foodDesc: string = "";
  sudokuDesc: string = "";
  thirdDesc: string = "";
  techStack: string = "";
  description: string = "";

  techStackArr: string[] = [
    "Truffle Suite, Solidity, HTML, CSS, JavaScript, Metamask, Ganache",
    "Java, JavaFX, Maven, JDBC, Microsoft SQL Server",
    "C, MPLAB X IDE, PIC32-based Microprocessor Board",
    "Python, Pygame",
    "VHDL, WSL (Ubuntu)",
    "AngularJS, HTML, CSS, TypeScript, Github Pages",
    "JavaScript, HTML, CSS, Google Firebase Realtime Database, Github Pages",
    "Java, Weka"
  ];
  descriptionArr: string[] = [
    "This decentralized vaccine record keeper/tracker stores its data on the Ethereum Blockchain.",
    "This project helped me learn about executing SQL statements in a java program. I used JavaFX to create the GUI and I most utilized Scene Builder to generate the components",
    "I programmed a microprocessor board with servo motors attached to follow a line of black tape.",
    "Funnily enough, I had to do a Sudoku Solver for class the semester after making this. Sadly, it was in Java while I did this in Python.",
    "This project was for a Computer Engineering class. We designed an instruction-fed calculator in VHDL at the RTL level. It's also capable of skipping instructions",
    "The source code for this website!",
    "I made this messaging web app for a Web Applications class, it is modeled off of Discord so I decided to name it accordingly",
    "The source code for a Rule-based Classification algorithm I modified for my Data Mining class"
  ];

    mouseEnter(div : number){
        this.techStack = this.techStackArr[div];
        this.description = this.descriptionArr[div];
        document.getElementById("scroll")?.setAttribute("style","height: 640px;");
        document.getElementById("scroll2")?.setAttribute("style","height: 640px;");
     }
  
     mouseLeave(){
       this.foodDesc = "";
       this.sudokuDesc = "";
       this.thirdDesc = "";
       this.techStack = "";
       this.description = "";
       document.getElementById("scroll")?.setAttribute("style","height: 400px;");
       document.getElementById("scroll2")?.setAttribute("style","height: 400px;");
     }

}

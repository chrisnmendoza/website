import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { MudkipComponent } from '../mudkip/mudkip.component';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { MessagesComponent } from '../messages/messages.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  bio: string = "I'm Chris Mendoza, a graduate student attending the University of Delaware. I'm studying Cybersecurity with a concentration in Security Analytics. Software Engineering has been a huge interest of mine, and I try to work on coding-related projects whenever I can. So I made this website! The menu icon on the top left displays all the pages, but you can also click on the links below!";

  techStackArr: string[] = [
    "Truffle Suite, Solidity, HTML, CSS, JavaScript, Metamask, Ganache",
    "Java, JavaFX, Maven, JDBC, Microsoft SQL Server",
    "C, MPLAB X IDE, PIC32-based Microprocessor Board",
    "Python, Pygame",
    "VHDL, WSL (Ubuntu)",
    "AngularJS, HTML, CSS, TypeScript, Github Pages",
    "JavaScript, HTML, CSS, Google Firebase Realtime Database, Github Pages",
    "Java, Weka",
    "MERN Stack (MongoDB, Express.js, React.js, Node.js), AWS",
    "Electron, Go, WEKA, Python, Scikit-Learn"
  ];

  descriptionArr: string[] = [
    "This decentralized vaccine record keeper/tracker stores its data on the Ethereum Blockchain.",
    "This project helped me learn about executing SQL statements in a java program. I used JavaFX to create the GUI and I most utilized Scene Builder to generate the components",
    "I programmed a microprocessor board with servo motors attached to follow a line of black tape.",
    "Funnily enough, I had to do a Sudoku Solver for class the semester after making this. Sadly, it was in Java while I did this in Python.",
    "This project was for a Computer Engineering class. We designed an instruction-fed calculator in VHDL at the RTL level. It's also capable of skipping instructions",
    "The source code for this website!",
    "I modeled this messaging app off of Discord so I decided to name it accordingly",
    "The source code for a Rule-based Classification algorithm I modified for my Data Mining class",
    "A search engine for coding assistance. I made this with Cameron Frey for our Data Search class. Hosted using AWS EC2, Elastic Load Balancing, and Route 53.",
    "I made this ML-driven malware analysis application for my year-long Senior Design class. Team members included Alex Pickett, Brandon Brooks, Liam Jordan, and me"
  ];

  mouseEnter(div : number){
      document.getElementById("scroll")?.setAttribute("style","height: 640px;");
      document.getElementById("scroll2")?.setAttribute("style","height: 640px;");
    }

  mouseLeave(){
    document.getElementById("scroll")?.setAttribute("style","height: 400px;");
    document.getElementById("scroll2")?.setAttribute("style","height: 400px;");
  }

  image : string = "assets/img/case.png";

  onMouseOver(): void {
    this.image = "assets/img/case_clickme.png";
  }

  onMouseOut(): void {
    this.image = "assets/img/case.png";
  }

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  description: string[] = ["Skills Used: ", "Skills Used: ", "Skills Used: ", "Skills Used: ", "Skills Used: ", "Skills Used: ", "Skills Used: ", "Skills Used: "];
  list: string[] = ["Agile Methodology, C#, Angular, Solidity, Ethereum Blockchain Development", "Java, JavaFX, Maven", "C, PIC32MX Microprocessors, MPLAB IDE", "Tableau, Excel (Pivot Tables)", "VHDL, Vivado, VMWare Workstation", "Excel, Daily Work Reports", "Java, REST API Development, TypeScript", "Groovy, Katalon, Gosu, Bamboo, Jenkins"];
  skills: string[] = ["Agile Methodology, C#, Angular, Solidity, Ethereum Blockchain Development", "Java, JavaFX, Maven", "C, PIC32MX Microprocessors, MPLAB IDE", "Tableau, Excel (Pivot Tables)", "VHDL, Vivado, VMWare Workstation", "Excel, Daily Work Reports", "Java, REST API Development, TypeScript", "Groovy, Katalon, Gosu, Bamboo, Jenkins"];
  desc: string[] = [
    "I worked on a .NET application that helped identify and record migration blockers for M&T's databases. I also competed in a summer-long app-dev contest and won!",
    "I helped students learn the fundamentals of object-oriented program as well as the fundamentals of JavaFX.",
    "I helped students learn how to program PIC32 microcontrollers. Some key concepts include Interrupt Service Routines and port structure.",
    "I worked with data analysts to gather data insights on numerous pipeline KPI's.",
    "I helped students learn the fundamentals of FPGA's and VHDL programming. I also helped them learn about logic gates and boolean algebra.",
    "I assisted in the collection of construction metrics to develop daily work reports for the accurate payment of construction jobs.",
    "I revamped a REST API to promote scalability and compatibility with future projects. I also wrote the documentation and handled the security reviews for the project.",
    "I developed scripts for the automated UI testing of company web applications. I also managed the daily end-to-end and smoke tests."
  ]
  mouseEnter(div : number){
    this.description[div] = "Description: ";
    this.list[div] = this.desc[div];
 }

 mouseLeave(){
   //this.description[0] = "Skills Used";
   this.description.forEach(function(part, index, arr) {
    arr[index] = "Skills Used: ";
   }, this.description);
   var index = 0;
   for(var v in this.list) {
     this.list[index] = this.skills[index];
     index++;
   }
 }

}

import { Component, OnInit } from '@angular/core';

@Component({ 
    selector: 'app-about',
    templateUrl: 'about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    constructor() { }

    description: string = "Some of my interests (outside of coding) include working out, cooking, and longboarding";
  
    ngOnInit(): void {
    }
  
  }
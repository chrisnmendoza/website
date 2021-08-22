import { Component, OnInit } from '@angular/core';

@Component({ 
    selector: 'app-about',
    templateUrl: 'about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    constructor() { }
    p1: string = "I was interested in technology from a young age, as a kid I would browse the internet while my parents were at work. In hindsight, I probably needed more supervision.";
    p2: string = "I was born in DuBois, Pennsylvania, and I currently live in Selden, New York. In ten years I see myself working in a managerial position, either that or a senior software engineer position. I plan on staying on the east coast, that way I can stay relatively close to family and New York pizza.";
    p3: string = "Some of my interests (outside of coding) include working out, cooking, and longboarding. Something I'm trying to improve on is my sleep schedule, I'm a real night owl sometimes. I'm always willing to work on myself, improvement is my biggest motivation. I want to always be better than the person I was yesterday.";
    ngOnInit(): void {
    }
  
  }
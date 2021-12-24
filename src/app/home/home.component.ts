import { Component } from '@angular/core';

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
export class HomeComponent {
  bio: string = "I'm Chris Mendoza, a current student attending the University of Delaware. I'm studying Computer Engineering and I have minors in Computer Science and Cybersecurity. Software Engineering has been a huge interest of mine, and I try to work on coding-related projects whenever I can. So I made this website! The menu icon on the top left displays all the pages, but you can also click on the links below!";
}
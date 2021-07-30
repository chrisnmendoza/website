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
export class HomeComponent {}
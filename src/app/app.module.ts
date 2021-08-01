import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {MaterialModule} from './material-module';


import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MudkipComponent } from './mudkip/mudkip.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MenuComponent } from './menu/menu.component';

import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { ProjectsComponent } from './projects';
import { HeaderComponent } from './header/header.component';
import { ProjectsDataComponent } from './projects-data/projects-data.component';

@NgModule({
  declarations: [
    AppComponent,
    MudkipComponent,
    PokemonDetailComponent,
    MessagesComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    HeaderComponent,
    ProjectsDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
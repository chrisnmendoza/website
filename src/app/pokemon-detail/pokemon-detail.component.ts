import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../mudkip';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() pokemon?: Pokemon;

}

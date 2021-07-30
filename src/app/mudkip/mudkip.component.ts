import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../mudkip';
import { PokemonService } from '../pokemon.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-mudkip',
  templateUrl: './mudkip.component.html',
  styleUrls: ['./mudkip.component.css']
})
export class MudkipComponent implements OnInit {

  constructor(private pokemonService: PokemonService, private messageService: MessageService) {}


  ngOnInit(): void {
    this.getPokemans();
  }

  mudkip: Pokemon = {
    id: 1,
    name: 'mudkip'
  };

  pokemans: Pokemon[] = [];

  selectedPokemon?: Pokemon;
  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
    this.messageService.add(`MudkipComponent: Selected pokemon id=${pokemon.id}`);
  }

  getPokemans(): void {
    this.pokemonService.getPokemon().subscribe(pokemans => this.pokemans = pokemans);
  }

}

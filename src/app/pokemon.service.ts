import { Injectable } from '@angular/core';
import { Pokemon } from './mudkip';
import { POKEMON } from './pokemon-list';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private messageService: MessageService) { }

  getPokemon(): Observable<Pokemon[]> {
    const poke = of(POKEMON);
    this.messageService.add('PokemonService: fetched pokemon');
    return poke;
  }
}

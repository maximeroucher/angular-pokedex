import { Component, Input, TemplateRef } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../type/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
  inputs: ['id'],
})
export class PokemonCardComponent {
  @Input()
  id!: string;

  pokemon!: Pokemon;

  loading = true;

  errorMessage!: string;

  constructor(private pokemonService: PokemonService) {
    
  }

  ngOnInit() {
    this.fetchPokemon(this.id);
  }

  public fetchPokemon(id: string) {
    this.pokemonService.getPokemon(id).subscribe(
      (data) => {
        this.pokemon = data as Pokemon;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = error.message;
        this.loading = false;
      },
    );
  }

  public poundsToKilograms(pounds: number) {
    return (pounds / 2.2046).toFixed(0);
  }

  public decimeterToCentimeter(decimeter: number) {
    return (decimeter * 10).toFixed(0);
  }

  public capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

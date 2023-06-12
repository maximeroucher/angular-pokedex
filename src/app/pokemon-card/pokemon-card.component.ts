import { Component, HostListener, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/type/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
  inputs: ['id'],
})
export class PokemonCardComponent implements OnInit {
  @Input()
  id!: string;

  pokemon!: Pokemon;

  loading = true;

  errorMessage!: string;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.fetchPokemon(this.id);
  }

  public fetchPokemon(id: string) {
    this.pokemonService.getPokemon(id).subscribe({
      next: (data) => {
        this.pokemon = {
          name: data.name,
          id: data.id,
          sprite: data.sprites.other['official-artwork'].front_default,
          height: data.height,
          weight: data.weight,
        };
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.loading = false;
      },
    });
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

  public catchPokemon() {
    alert('You caught ' + this.pokemon.name + '!');
  }
}

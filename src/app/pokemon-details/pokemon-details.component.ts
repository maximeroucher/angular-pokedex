import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { PokemonDetails } from 'src/app/type/pokemonDetails';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit{

  pokemonDetails!: PokemonDetails;

  loading = true;

  errorMessage!: string;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.fetchPokemon(params.get('id')!);
    });
  }

  public fetchPokemon(id: string) {
    this.pokemonService.getPokemon(id).subscribe({
      next: (data) => {
        this.pokemonDetails = {
          name: data.name,
          id: data.id,
          spriteBack: data.sprites.back_default,
          spriteFront: data.sprites.front_default,
          shinySpriteBack: data.sprites.back_shiny,
          shinySpriteFront: data.sprites.front_shiny,
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
}

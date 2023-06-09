import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { of } from 'rxjs';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonCardComponent],
      providers: [
        { provide: PokemonService, useValue: { getPokemon: () => of({}) } },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(PokemonCardComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardComponent } from './pokemon-card.component';
import { PokemonService } from '../services/pokemon.service';
import { of } from 'rxjs/internal/observable/of';

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
  expect(component.poundsToKilograms(100)).toEqual('45');
  fixture.detectChanges();
});

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

export const appRouteList: Routes = [
  {
    path: '',
    component: PokemonsComponent,
  },
  {
    path: ':id/details',
    component: PokemonDetailsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRouteList)],
})
export class AppRoutingModule {}

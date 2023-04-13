import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './list-pokemons/pokemons.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

const pokemonsRoutes: Routes = [
  { path: 'pokemon/all', component: PokemonsComponent, title: 'Accueil' },
  {path: 'pokemon/:id', component: DetailPokemonComponent},
  { path: 'pokemon/edit/:id', component: EditPokemonComponent },
  

];

@NgModule({
  imports: [RouterModule.forChild(pokemonsRoutes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }

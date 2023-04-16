import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './list-pokemons/pokemons.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemons/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';

// const pokemonsRoutes: Routes = [
//   { path: 'pokemon/all', component : PokemonsComponent, },
//   { path: 'pokemon/:id', component : DetailPokemonComponent},
//   { path: 'pokemon/edit/:id', component : EditPokemonComponent},
// ];

const pokemonsRoutes: Routes = [
  {
    path: 'pokemon',
    children: [
      { path: 'all', component : PokemonsComponent},
      {path:'add',component: AddPokemonComponent},
      { path: 'edit/:id', component : EditPokemonComponent},
      { path: ':id', component : DetailPokemonComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(pokemonsRoutes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }

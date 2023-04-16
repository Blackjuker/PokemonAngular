import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './list-pokemons/pokemons.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemons/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { AuthGuard } from '../auth.guard';

// const pokemonsRoutes: Routes = [
//   { path: 'pokemon/all', component : PokemonsComponent, },
//   { path: 'pokemon/:id', component : DetailPokemonComponent},
//   { path: 'pokemon/edit/:id', component : EditPokemonComponent},
// ];

const pokemonsRoutes: Routes = [
  {
    path: 'pokemon',
    children: [
      { path: 'all', component : PokemonsComponent,canActivate:[AuthGuard]},
      {path:'add',component: AddPokemonComponent,canActivate:[AuthGuard]},
      { path: 'edit/:id', component : EditPokemonComponent,canActivate:[AuthGuard]},
      { path: ':id', component : DetailPokemonComponent,canActivate:[AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(pokemonsRoutes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }

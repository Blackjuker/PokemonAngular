import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsComponent } from './list-pokemons/pokemons.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemons/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { FormsModule } from '@angular/forms';
import { FormPokemonComponent } from './edit-pokemons/form-pokemon.component';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { BorderCardDirective } from './directive/border-card.directive';

import { PokemonsService } from './pokemons.service';

import { PokemonRoutingModule } from './pokemons-routing.module';


@NgModule({
  declarations: [
    PokemonsComponent,
    DetailPokemonComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    FormPokemonComponent,
    PokemonTypeColorPipe,
    BorderCardDirective,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule
  ],
  providers: [PokemonsService],
  bootstrap: []
})
export class PokemonsModule { }

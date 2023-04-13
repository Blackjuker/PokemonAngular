import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { PokemonsComponent } from './list-pokemons/pokemons.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { FormsModule } from '@angular/forms';
import { FormPokemonComponent } from './edit-pokemon/form-pokemon.component';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { BorderCardDirective } from './directive/border-card.directive';

import { PokemonService } from './pokemon.service';
import { PokemonRoutingModule } from './pokemons-routing.module';




@NgModule({
  declarations: [
    PokemonsComponent,
    DetailPokemonComponent,
    EditPokemonComponent,
    PokemonTypeColorPipe,
    BorderCardDirective,
    FormPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule
  ],
  providers: [PokemonService],
  bootstrap: []
})
export class PokemonsModule { }

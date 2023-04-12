import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/list-pokemons/pokemons.component';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { BorderCardDirective } from './directive/border-card.directive';
import { DetailPokemonComponent } from './pokemons/detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditPokemonComponent } from './pokemons/edit-pokemon/edit-pokemon.component';
import { FormsModule } from '@angular/forms';
import { FormPokemonComponent } from './pokemons/edit-pokemon/form-pokemon.component';
import { PokemonService } from './pokemons/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonTypeColorPipe,
    BorderCardDirective,
    DetailPokemonComponent,
    PageNotFoundComponent,
    EditPokemonComponent,
    FormPokemonComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

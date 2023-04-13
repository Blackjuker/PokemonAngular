import {Component, OnInit } from "@angular/core";

import  {Pokemon } from '../donnees-pokemon/pokemon';

//Imporation d'angular le router pour les liens
import { Router } from '@angular/router';
import { PokemonService } from "../pokemon.service";


@Component({
    selector: 'list-pokemon',
    templateUrl:'./pokemons.component.html'
})

export class PokemonsComponent implements OnInit{

    pokemons !: Pokemon[]

    constructor(private router: Router, private pokemonService: PokemonService){}

    ngOnInit(): void {
        //j'insère les données de mock-pokemon.ts dans la variable pokemons du composant
     //   this.pokemons =       this.pokemonService.getPokemons();

        this.pokemonService.getPokemons().subscribe
        (
            pokemons => {
                this.pokemons = pokemons;
            }
        );
       
    
}

    selectPokemon(pokemon: Pokemon) {
      //  console.log(pokemon.id)

        let link = ['/pokemon',pokemon.id]
        this.router.navigate(link)
    }

   

}
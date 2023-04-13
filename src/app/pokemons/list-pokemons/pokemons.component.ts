import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../donnees-pokemons/pokemon";

// Importation d'angular le router pour les leins
import { Router } from "@angular/router";
import { PokemonsService } from "../pokemons.service";

@Component({
  selector: 'list-pokemon',
  templateUrl: './pokemons.component.html'
})
export class PokemonsComponent implements OnInit{
  pokemons !: Pokemon[]

  constructor(private router: Router, private pokemonService: PokemonsService){}

  ngOnInit(): void {
    //J'insère les données de moch-pokemon.ts dans la variable pokemons du composant
    // this.pokemons = this.pokemonService.getPokemons()

    this.pokemonService.getPokemons().subscribe(
      pokemons => this.pokemons = pokemons
    )
    
  }

  selectPokemon(pokemon: Pokemon){
    console.log(pokemon.id)
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link)
    
  }

   
  generateNumbers(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i + 1);
  }
  generateStars(count: number): any[] {
    return Array.from({ length: count });
  }
   
  
}
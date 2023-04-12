import { Injectable} from "@angular/core";
import { Pokemon } from './donnees-pokemon/pokemon';
import { POKEMONS } from './donnees-pokemon/mock-pokemon';

@Injectable()
export class PokemonService {
    constructor() {
    }
    getPokemons():Pokemon[] {
        return POKEMONS;
    }

    //Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id:number){
        let pokemons = this.getPokemons();
        for(let i=0;i<pokemons.length;i++){
            if(pokemons[i].id == id){
              return pokemons[i]
            }
          }
          return false;
    }

}
import { Injectable} from "@angular/core";
import { Pokemon } from './donnees-pokemon/pokemon';
import { POKEMONS } from './donnees-pokemon/mock-pokemon';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable,of,catchError,tap } from "rxjs";


@Injectable()
export class PokemonService {
    constructor(private http: HttpClient) { }

    private pokemonsUrl ='api/pokemons';


    // getPokemons():Pokemon[] {
    //     return POKEMONS;
    // }

    getPokemons():Observable<Pokemon[]> {
      return this.http.get<Pokemon[]>(this.pokemonsUrl)
    }

    // getPokemons():Observable<any> {
    //   return this.http.get<Pokemon[]>(this.pokemonsUrl)
    // }
    
    //Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id:number){
        let pokemons = POKEMONS
        for(let i=0;i<pokemons.length;i++){
            if(pokemons[i].id == id){
              return pokemons[i]
            }
          }
          return false;
    }

    //Delete Pokemon by id  

}
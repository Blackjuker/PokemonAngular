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

  private log(log:string) {
    console.log(log);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`)

      return of(result as T);
    }
  }


// Le pipe async est un pipe capable de consommer des Observables ( ou Promise) en appelant
// implicitement la méthode subscribe (ou then) afin de "binder" les valeurs contenus dans 
//l'observable (ou la promise)
    getPokemons():Observable<Pokemon[]> {
      return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
      tap(_ =>this.log(`fetched pokemons`)),
      catchError(this.handleError(`getPokemons`,[]))
      );
    }

    // getPokemons():Observable<any> {
    //   return this.http.get<Pokemon[]>(this.pokemonsUrl)
    // }
    
    //Retourne le pokémon avec l'identifiant passé en paramètre
    // getPokemon(id:number){
    //     let pokemons = POKEMONS
    //     for(let i=0;i<pokemons.length;i++){
    //         if(pokemons[i].id == id){
    //           return pokemons[i]
    //         }
    //       }
    //       return false;
    // }

    getPokemon(id:number):Observable<Pokemon> {
      const url = `${this.pokemonsUrl}/${id}`;
      return this.http.get<Pokemon>(url).pipe(
      tap(_ =>this.log(`fetched pokemon ${id}`)),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
      );
    }

    //Delete Pokemon by id  

}
import { Injectable } from '@angular/core';
import { Pokemon } from './donnees-pokemons/pokemon';
import { POKEMONS } from './donnees-pokemons/mock-pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of , catchError, tap, map} from 'rxjs';
import { Type } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) {
  }

  private handleError<T>(operation='operation', result?:T){
    return (error:any): Observable<T>=>{
      console.log(error)
      console.log(`${operation} failed: ${error.message}`)
      return of(result as T);

    }
  }

  // le pipe async est un pipe capable de consommer des observables (ou promise) en appelant implecitement
  // la methose subscribe(ou then) afin de "binder" les valeurs contenus da,s l'observable(ou promise)
  getPokemons():Observable<Pokemon[]>{
    console.log(this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
      tap(_=>this.log('fetch Pokemons'))
    ))
    return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
      tap(_=>this.log('fetch Pokemons'))
    )
  }
  log(arg0: string){
    console.log(arg0);
  }
  private pokemonsUrl = 'api/pokemons'
  // getPokemons(): pokemon[]{
  //   return POKEMONS
  // }

  getPokemon(id:number): Observable<Pokemon>{
    const url = `${this.pokemonsUrl}/${id}`
    return this.http.get<Pokemon>(url).pipe(
      tap(_=>this.log('fetch Pokemons')),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
    )
    //return this.getPokemons().pipe(map((pokemons: any[]) => pokemons.find(pokemon => pokemon.id === id)))
  }

  // deletePokemon(pokemon: pokemon){
  //   this.getPokemons().splice(this.getPokemons().indexOf(pokemon), 1)
  // }

  getPokemonTypes(): string[]{
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poisson', 'Fée', 'Vol'];
  }

  addTypePokemon(pokemon: Pokemon): Observable<any> {
    // console.log(";;;;;;;;;;;;;;;;; ", id, "\n", types)
   
    // const options = {
    //   headers:
    //     new HttpHeaders({
    //       'Access-Control-Request-Method': 'GET, POST, PUT, DELETE',
    //       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    //     })
    // }
    return this.http.put<Pokemon>(this.pokemonsUrl, pokemon)
      .pipe(
        tap(poke => console.log("::::",poke)),
        catchError((err) => {
          console.log(err)
          return of([])
        })
      )
  }
}

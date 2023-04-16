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
    /*console.log(this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
      tap(_=>this.log('fetch Pokemons'))
    ))*/
    return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
      tap(_=>this.log('fetch Pokemons')),
     catchError((error)=>{
      console.log(error);
      return of([]);
     })
    )
    // return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
    //   tap((Pokemon[])=>console.table(Pokemon[])),
    //   catchError(this.handleError<Pokemon[]>('fetch Pokemons'))
    // )
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
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol'];
  }

  // updatePokemon(pokemon: Pokemon){
  //   return this.http.put<Pokemon>(this.pokemonsUrl, pokemon).pipe(
  //     tap(_=>this.log('update Pokemons')),
  //     catchError(this.handleError<Pokemon>(`updatePokemon id=${pokemon.id}`))
  // }

  addTypePokemon(pokemon: Pokemon): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })}
    return this.http.put<Pokemon>(this.pokemonsUrl, pokemon,httpOptions).pipe()
      .pipe(
        tap(poke => console.log("::::",poke)),
        catchError((err) => {
          console.log(err)
          return of([])
        })
      )
  }

  deletePokemon(pokemonId: number):Observable<any>{
    const url = `${this.pokemonsUrl}/${pokemonId}`
    return this.http.delete(url)
    .pipe(
      tap(poke =>console.log("::::",poke)),
      catchError(
        this.handleError<any>(`getPokemon id=${pokemonId}`))
    );
  }

  addPokemon(pokemon: Pokemon):Observable<Pokemon>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })}

      return this.http.post<Pokemon>(this.pokemonsUrl, pokemon,httpOptions).
            pipe(
              tap(_=>this.log('add Pokemon')),
              catchError(this.handleError<Pokemon>("Erreur creation pokemon"))  
      
            )
  }

  moteurRecherche(motCle:string):Observable<Pokemon[]>{
    const url = `${this.pokemonsUrl}?name=${motCle}`
    return this.http.get<Pokemon[]>(url).pipe(
        tap(_=>this.log('Search Pokemons')),
        catchError(this.handleError<Pokemon[]>('Search Pokemons',[]))
    );
  }
}

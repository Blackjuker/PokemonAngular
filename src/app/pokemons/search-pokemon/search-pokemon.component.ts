import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../donnees-pokemons/pokemon';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {

  motRecherche = new Subject<string>();
  pokemons$:Observable<Pokemon[]> | undefined;

  constructor(private router: Router,private pokemonService: PokemonsService) { }

  ngOnInit():void {
    this.pokemons$ = this.motRecherche.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap ((motCle)=>this.pokemonService.moteurRecherche(motCle))
    );
  }

  recherchePokemon(mot:string){
    this.motRecherche.next(mot);
    
  }

  goToDetail(pokemon:Pokemon){
    const  url = ['/pokemon', pokemon.id];
    this.router.navigate(url);
  }
}

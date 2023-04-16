import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../donnees-pokemons/pokemon';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {

  motRecherche = new Subject<string>();
  pokemons$:Observable<Pokemon[]> | undefined;

  constructor(private router: Router) {
  }

  ngOnInit():void {
  }

  recherchePokemon(mot:string){

  }

  goToDetail(pokemon:Pokemon){
    const  url = ['/pokemon', pokemon.id];
    this.router.navigate(url);
  }
}

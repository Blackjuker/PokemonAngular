import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../donnees-pokemon/pokemon';
import { POKEMONS } from '../donnees-pokemon/mock-pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})


export class EditPokemonComponent implements OnInit  {
  pokemons!: Pokemon[];
  pokemon: any=null;

  constructor(private route:ActivatedRoute,private router:Router,private pokemonService: PokemonService) {

  }
  ngOnInit():void{
    this.pokemons = POKEMONS

    //let id = this.route.snapshot.paramMap.get('id'); ou 
    let idUrl = this.route.snapshot.params['id']

   this.pokemon = this.pokemonService.getPokemon(idUrl);

    for(let i=0;i<this.pokemon.types.length;i++){
      const type = this.pokemon.types[i];
      const checkbox = document.querySelector(`input[type=checkbox][value="${type}"]`);
      if (checkbox) {
        checkbox.setAttribute('checked', 'checked');
      }
    }
}

}

import { Component, OnInit  } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../donnees-pokemons/pokemon';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {
  
  pokemon !: Pokemon;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonsService ) { }
 
  

  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }

}

import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../donnees-pokemons/pokemon';
import { Router, ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {
  pokemon: any = null;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    let idUrl = this.route.snapshot.params['id']
    
    this.pokemonsService.getPokemon(idUrl).subscribe(
      pokemon => this.pokemon = pokemon
    );

  }

  goBack():void{
    this.router.navigate(['/pokemon/all'])
  }

  goEdit(pokemon: Pokemon):void{
    let link = ['pokemon/edit', pokemon.id];
    this.router.navigate(link)
  }
  goDelete(pokemon: Pokemon):void{
   // let link = ['pokemon/delete', pokemon.id];
    let link = ['pokemon/all'];
    this.pokemonsService.deletePokemon(pokemon.id).subscribe(
      pokemon => this.pokemon = pokemon
    )
    this.router.navigate(link)
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
})
export class EditPokemonComponent implements OnInit {
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
}

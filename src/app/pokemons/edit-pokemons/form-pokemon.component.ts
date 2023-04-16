import { Component, OnInit, Input } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { PokemonsService } from "../pokemons.service";
import { Pokemon } from "../donnees-pokemons/pokemon";

@Component({
  selector: 'form-pokemon',
  templateUrl: './form-pokemon.component.html'
})
export class FormPokemonComponent implements OnInit{

  @Input() pokemon: any
  types: any = [];
  isAddingPokemon !: boolean;

  constructor(private router: Router, private pokemonsService: PokemonsService){}

  ngOnInit(): void {
    this.types = this.pokemonsService.getPokemonTypes();
    this.isAddingPokemon = this.router.url.includes("add");
  }


  // Détermine si e type est passé en paramètres appartient ou no au pokémon en cours d'édition
  hasType(type: string):boolean{
    let index = this.pokemon.types.indexOf(type)
    if(index > -1){
      return true
    }
    return false
  }

  //Méthode appelée lorsque l'utilisateur ajout ou retire un type au pokémon en cours d'édition
  selectType($event: any, type: string): void{
    let checked = $event.target.checked

    // if(checked){
    //   this.pokemon.types.push(type)
    // }else{
    //   let index = this.pokemon.types.indexOf(type)
    //   if(index > -1){
    //     this.pokemon.types.splice(index,1)
    //   } 
    // }
    checked? this.pokemon.types.push(type) : this.pokemon.types.splice(this.pokemon.types.indexOf(type),1);
  }

  // Valide le nombre de types pour chaque pokémon
  isTypesValid(type: string):boolean{
    if(this.pokemon.types.length === 1 && this.hasType(type)){
      return false
    }

    if(this.pokemon.types.length >= 3 && !this.hasType(type)){
      return false
    }
    return true;
  }

  onSubmit():void{
   
    if (this.isAddingPokemon) {
    //  this.pokemonsService.addPokemon(this.pokemon).subscribe(p=>console.log(p));

    if (isNaN(this.pokemon.id)){
      this.pokemon.id = Date.now();
    }
      this.pokemonsService.addPokemon(this.pokemon)
      .subscribe((pokemon : Pokemon)=>this.router.navigate(['/pokemon', pokemon.id])),console.log(this.pokemon.id);
     
    }else{
     
     
      let link = ['/pokemon', this.pokemon.id]
      this.pokemonsService.addTypePokemon(this.pokemon).subscribe(p=>console.log(p));
      this.router.navigate(link)
      //  this.pokemonsService.updatePokemon(this.pokemon).subscribe(p=>console.log(p));
    }
  
  
  }

}
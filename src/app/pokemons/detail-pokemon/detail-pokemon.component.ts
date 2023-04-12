import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../donnees-pokemon/pokemon';
import { POKEMONS } from '../donnees-pokemon/mock-pokemon';
import {Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit { 

  pokemons!: Pokemon[];
  pokemon: any=null;

  constructor(private route:ActivatedRoute,private router:Router) {

  }
    ngOnInit():void{
        this.pokemons = POKEMONS

        //let id = this.route.snapshot.paramMap.get('id'); ou 
        let idUrl = this.route.snapshot.params['id']

        for(let i=0;i<this.pokemons.length;i++){
          if(this.pokemons[i].id == idUrl){
            this.pokemon = this.pokemons[i]
          }
        }
    }

    goBack():void{
      this.router.navigate(['/pokemon/all']);
    }

    goEdit(pokemon:Pokemon){
      this.router.navigate(['/pokemon/edit',pokemon.id]);
    }

    onDelete(pokemon:Pokemon){
      for(let i=0;i<this.pokemons.length;i++){
        if(this.pokemons[i].id == pokemon.id){
          this.pokemons.splice(i,1)
          this.router.navigate(['/pokemon/all']);
        }
      }
      
    }  
}
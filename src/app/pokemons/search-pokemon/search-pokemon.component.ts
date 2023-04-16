import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
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


  checkboxes !: HTMLInputElement[];
  typeAttribut: string="name";
  @ViewChild('searchInput', { static: false }) searchInput!: ElementRef;


  ngOnInit():void {
    this.checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

    

    this.pokemons$ = this.motRecherche.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap ((motCle)=>this.pokemonService.moteurRecherche(motCle,this.typeAttribut))
    );
  }

  recherchePokemon(mot:string){
    this.motRecherche.next(mot);
    
  }

  goToDetail(pokemon:Pokemon){
    const  url = ['/pokemon', pokemon.id];
    this.router.navigate(url);
  }

  handleCheckboxChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
     this.typeAttribut = target.name;
     this.textSearchPerso(this.typeAttribut);
      this.checkboxes.forEach((checkbox) => {
        if (checkbox !== target) {
          checkbox.disabled = true;
        }
      });
    } else {
      this.checkboxes.forEach((checkbox) => {
        checkbox.disabled = false;
      });
    }
  }

  private textSearchPerso(text: string) {
    if (text=="name") {
      this.searchInput.nativeElement.placeholder = "Rechercher par nom du pokemon";
    }else if (text=="type"){
      this.searchInput.nativeElement.placeholder = "Donner le nom du type Complet";
    }else if (text=="rarete"){
      this.searchInput.nativeElement.placeholder = "Rechercher par rarete du pokemon en chiffre";
    }
  }
}

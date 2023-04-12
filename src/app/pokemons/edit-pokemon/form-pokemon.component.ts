import { Component,OnInit,Input} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';



@Component({
    selector:'form-pokemon',
    templateUrl: './form-pokemon.component.html',

})

export class FormPokemonComponent implements OnInit{

    @Input() pokemon:any

    types:any = []

    constructor(private router:Router){
    }


    ngOnInit(): void {
        this.types = this.getPokemonTypes();
    }

    getPokemonTypes(): string[]{
        return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol'];
      }

    //detetermine si le type est passé en paramètres appartient ou non au pokémon en cours d'édition
    hasType(type: string): boolean {
        let index = this.pokemon.types.indexOf(type);
        if(index > -1){
            return true;
        }
        return false;
    }
    
    //Méthode appelée lorsqye l'utilisateur ajout ou retire un type au pokémon en cours d'édition
    selectType($event: any,type: string): void {
        let checked = $event.target.checked;
        
        if(checked){
            this.pokemon.types.push(type);
        }else{
            let index = this.pokemon.types.indexOf(type);
            if(index > -1){
                this.pokemon.types.splice(index,1);
            }
        }
    }

    //Valide le nombre de types pour chaque pokémon
    isTypesValid(type:string): boolean{
         // pour les checksbox avec la ! sur hastype cela permet de grisser les checkboxes qui ne sont selectionnés
        if(this.pokemon.types.length ===1 && this.hasType(type)){
            return false;
        }
 // pour les checksbox avec la ! sur hastype cela permet de grisser les checkboxes qui ne sont selectionnés
        if(this.pokemon.types.length >= 3 && !this.hasType(type)){
            return false;
        }


        return true;
    }

    onSubmit():void {
        let link = ['/pokemon',this.pokemon.id]
        this.router.navigate(link);
    }

    goBack():void {
        this.router.navigate(['/pokemon/all']);
    }
}
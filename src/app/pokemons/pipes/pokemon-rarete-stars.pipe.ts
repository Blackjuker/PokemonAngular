import { Pipe, PipeTransform } from "@angular/core";


@Pipe({ name: 'pokemonRareteStar'})
export class PokemonRareteStarPipe implements PipeTransform {

     transform(value: number): string {
    
     switch (value) {
    
         case 5:
    
            return '*****';
    
        case 4:
    
            return '****';
    
         case 3:
    
             return '***';
    
         case 2:
    
             return '**';
    
         case 1:
    
            return '*';
    
        default:
    
             return '';
    
    }
    }
}
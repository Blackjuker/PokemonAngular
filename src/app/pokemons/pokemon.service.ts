import { Injectable} from "@angular/core";
import { Pokemon } from './donnees-pokemon/pokemon';
import { POKEMONS } from './donnees-pokemon/mock-pokemon';

@Injectable()
export class PokemonService {
    constructor() {
    }
    getPokemons():Pokemon[] {
        return POKEMONS;
    }

}
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { POKEMONS } from "./pokemons/donnees-pokemon/mock-pokemon";


export class InMemoryDataService implements InMemoryDbService {

    createDb(){
        let pokemons = POKEMONS;
        return {pokemons};
          }
}
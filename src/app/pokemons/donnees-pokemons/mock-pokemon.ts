import { Pokemon } from "./pokemon";

export const POKEMONS : Pokemon[] = [
  {
     id: 1,
     name: 'Bulbizarre',
     hp: 25,
     cp: 5,
     picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
     types: ["Plante", "Poison"],
     rarete:2,
     created: new Date()
  },
  {
    id: 2,
    name: 'Salamèche',
    hp: 28,
    cp: 6,
    picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    types: ["Feu"],
    rarete:2,
    created: new Date()
 },
 {
  id: 3,
  name: 'Carapuce',
  hp: 21,
  cp: 4,
  picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
  types: ["Eau"],
  rarete:4,
  created: new Date()
},
{
  id: 4,
  name: 'Roucool',
  hp: 30,
  cp: 7,
  picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
  types: ["Normal", "Vol"],
  rarete:3,
  created: new Date()
},
{
  id: 5,
  name: 'Rattata',
  hp: 18,
  cp: 6,
  picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
  types: ["Eau"],
  rarete:2,
  created: new Date()
},
{
  id: 6,
  name: 'Pikachu',
  hp: 21,
  cp: 7,
  picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
  types: ["Electrik"],
  rarete:5,
  created: new Date()
},
];
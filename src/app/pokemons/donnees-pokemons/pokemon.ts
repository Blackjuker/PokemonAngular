export class Pokemon{
  id !:number;
  hp !:number;
  cp !:number;
  name !: string;
  picture !:string;
  types !: Array<string>;
  rarete!:number;
  created !: Date; 

  constructor(){
    this.hp = 0;
    this.cp = 0;
    this.name = 'Nom du pokemon';
    this.picture = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png';
    this.types = ['Plante'];
    this.rarete= 0;
    this.created = new Date();
  }
}

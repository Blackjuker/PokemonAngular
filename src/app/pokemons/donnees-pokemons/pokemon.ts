export class Pokemon{
  id !:number;
  hp :number;
  cp :number;
  name : string;
  picture :string;
  types : Array<string>;
  rarete:number;
  created : Date; 

  constructor(
    name: string = 'Entrer un nom...',
    hp: number = 100,
    cp: number = 10,
    picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/109.png',
    types: string[] = ['Normal'],
    rarete: number = 1,
    created: Date = new Date()
  ){
    this.hp = hp;
    this.cp = cp;
    this.name = name;
    this.picture = picture;
    this.types = types;
    this.rarete= rarete;
    this.created =created;
  }
}

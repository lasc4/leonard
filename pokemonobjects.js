function Pokemons(name, type, hp, def, atk, legend){

this.name = name;

this.type = type;

this.hp = hp;

this.def = def;

this.atk = atk;

this.legend = legend;



}

var pikachu = new Pokemons("Pikachu", "Elctric", 300, 250, 400, "false");

console.log(pikachu);

pikachu.hp = pikachu.hp - 250;

pikachu.def = pikachu.def + 25;

console.log(pikachu);

var palkia = new Pokemons("Palkia", "Water/Dragon", 1000, 1000, 1000, "true");

console.log(palkia);

palkia.hp = palkia.hp - 500;

palkia.def = palkia.def + 1000


console.log(palkia);

var pokemons = [pikachu, palkia];

function PokemonAttack(){

    for (var i = 0; i < pokemon.length; i++){
   

    }
 

console.log(pikachu);
}


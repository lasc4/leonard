function BasketballPlayer(name, height, position, number, network, isgood,networth, team, pastTeams){

this.name = name;

this.height = height;

this.postion = position;

this.number = number;

this.networth = networth;

this.isgood= isgood;

this.team = team;

this,pastTeams = pastTeams;

}

var Shaq = new BasketballPlayer("shaquille o'neal", "7'1\"", "Center", "36", "10000000", "Celtics", "true", ["Magic", "Laker", "Heat", "Suns", "Cavs"] );
console.log(Shaq)

var bron = new BasketballPlayer("Lebron James", "6'8", "23", "cavs", "Small Foward", "1000000000", "true", ["Heat"]);

bron.teams = "Worriors";

bron.pastTeams.Push = (bron.team);

console.log(bron);
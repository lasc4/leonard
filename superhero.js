function Superhero(realName,gender, ability, archEnemy, age, weakness){

    this.realName = realName;
   
    this.ability = ability;
   
    this.gender = gender;
   
    this.archEnemy = archEnemy;

    this.age = age;

    this.weakness = weakness; 

    this.talk = function(){

console.log("Yo my name is + realName");
    }

}

var WonderWomen = new Superhero("Bianca White", "Female", "Super Strength", "Donald Trump", "20", "Guns");

var SuperMan = new Superhero("clark white", "Getting this MONEY", "Male", "Lex Luger", "30", "Crystals" );

SuperMan.ability = "Laser Vision";

console.log(SuperMan);

WonderWonder.archEnemy = SuperMan;

console.log(WonderWomen);s

WonderWomen.callforHelp("I'm looking out!");

SuperMan.callforHelp("Nahh b im good");

function setup(){
    createCanvas(1000, 1000);
  background(225);
}

function draw(){
    rect( 50, 600, 150, 150);
    rect( 600, 100, 150, 150);
    rect( 600, 50, 250, 25);
    rect( 50, 550, 250, 25);
    text("hp: 500/500", 680, 61);
     text("hp: 200/200", 61, 570);
    line(0,800,1000,800);
    line(0,900,1000,900);
    rect();
    rect();
    rect();
    rect(); 
    text("Abilites: swarm, blaze, torrent", 61, 830);
      rect( 58, 915, 40, 20); 
       rect( 99, 915, 55, 20);
       rect(155,915, 50, 20);
       rect(205, 915, 40, 20);
       rect(244, 915, 63, 20);
       rect(307, 915, 45, 20);
       rect(350, 915, 63,20);
       rect(413, 915, 6, 20);
    text("switch: gyarados, mewtwo, raichu, salamence, arcues, metagross, vaporeon", 61, 930);
   

}


function mouseX() {
  background(244, 248, 252);
  line(mouseX, 0, mouseX, 90);

  }
  
  function mouseY() {
  background(244, 248, 252);
  line(0, mouseY, 100, mouseY);
}

ellipse(mouseX, mouseY, 80, 80);

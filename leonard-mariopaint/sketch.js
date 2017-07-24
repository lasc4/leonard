function setup(){

    createCanvas(900, 900);
    background(225);
   
    strokeWeight(0);
}
function mouseDragged() {
  ellipse(mouseX, mouseY, 20, 20);
  
  return false;
}







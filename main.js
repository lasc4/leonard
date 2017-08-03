//mahdi-fied from https://www.sitepoint.com/url-parameters-jquery/
//takes a string argument - returns the value of the parameter (by name) from href, if it exists
function getParam(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if(results){
        return results[1];
    }else{
        return undefined;
    }
}


//TASK//
//Take 3 parameters from the href: 1) number, 2) shape, 3) color
//In the "setup()" function, use the parameters to create a number of shapes with the given color
//If a parameter is NOT found in the href, a default value should be set

var shapeName = getParam("shapeName") || "circle";
var numberCount = getParam("numberCount") || 100;
var colorPick = getParam("colorPick") || "red";
function setup(){
    createCanvas(1400,1400);
    background(123);
    fill(colorPick)

   if(shapeName == "circle"){

       for(var i = 0; i<numberCount; i++){
            ellipse(random(width), random(height), 20, 20)
        }
    }
    //Create a NUMBER of SHAPES with a COLOR

}


function draw(){

}
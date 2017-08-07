$.ajax({
  url: 'https://wger.de/api/v2/exerciseinfo/?format=json',
  dataType: 'json',
  success: function(data){
    var x = Math.round(Math.random()*20)
    var fitnessresults = data.results[x]
    var workoutName = fitnessresults.category.name;
    
    var workoutDescription = fitnessresults.description;
    var musclesResults = fitnessresults.muscles[0];
    console.log(data.results.length)

    $("body").append("<h1> " + workoutName + "</h1>");
   
    $("body").append("<h1> " + workoutDescription + "</h1>");
  //  $("body").append("<h1> " + musclesResults  + "</h1>");


                







































    

   
    $("body").append("<h2> "+ count + " </h2>");
    $("body").append("<h1> "+ count + " "+  next + " " + previous + " " + results + " " + description );
  }
});
    

$.ajax({
  url: 'https://randomuser.me/api/?nat=gb',
  dataType: 'json',
  success: function(data){

    var user = data.results[0];
    var  countrycode = user.nat;
    var userlocation = user.location.postcode;
    
        $("body").append("<h1>This is "+ countrycode + " "+  userlocation);
  }
});

handleData(data);
var handleData = function(data){

    
}
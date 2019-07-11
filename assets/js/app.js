$(document).ready(function(){

// ===============================================================================================
// ===============================================================================================

 // bbs top 10 headlines
 var queryURL = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=22aaeb67a2434db9922c8696bbd7c2e6";

 $.ajax({
   url: queryURL,
   method: "GET"
 })
   // We store all of the retrieved data inside of an object called "response"
   .then(function(response) {

     // Log the queryURL
     console.log(queryURL);

     // Log the resulting object
     console.log(response);

     
   });

       // any topic the user is interested in, here im using california for an example
       var topic = "california";
       var queryURL = "https://newsapi.org/v2/top-headlines?q=" + topic + "&apiKey=22aaeb67a2434db9922c8696bbd7c2e6";
   
       $.ajax({
         url: queryURL,
         method: "GET"
       })
         // We store all of the retrieved data inside of an object called "response"
         .then(function(response) {
   
           // Log the queryURL
           console.log(queryURL);
   
           // Log the resulting object
           console.log(response);
   
           
         });
         // ===============================================================================================
         // ===============================================================================================

  // weather api
var location = "Irvine"

var APIKey = "166a433c57516f51dfab1f7edaed8413";

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      "q=" + location + "&units=imperial&appid=" + APIKey;
     

axios.get(queryURL)
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {

      // Log the queryURL
      console.log(queryURL);

      var data = response.data
      // Log the resulting object
      console.log(response.data);

      // Transfer content to HTML
      $(".city").html("<h1>" + data.name + " Weather Details</h1>");
      $(".wind").text("Wind Speed: " + data.wind.speed);
      $(".humidity").text("Humidity: " + data.main.humidity);
      $(".temp").text("Temperature (F) " + data.main.temp);

      // Log the data in the console as well
      console.log("Wind Speed: " + data.wind.speed);
      console.log("Humidity: " + data.main.humidity);
      console.log("Temperature (F): " + data.main.temp);

      
    });
    
    // NASA api
    var APIKey = "iujBp7bl3MhknRg9wmTT7laW3Zd9ty2eWIocBbKX";

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.nasa.gov/planetary/apod?api_key=" + APIKey;
     

axios.get(queryURL)
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {

      // Log the queryURL
      console.log(queryURL);

      var data = response.data
      // Log the resulting object
      console.log(response.data);

      // Transfer content to HTML
      $(".date").html("<h3> Date:" + data.date + "</h3>");
     $(".explanation").text("Explanation: " + data.explanation);
      $(".title").text("Title: " + data.title);
    
    var imgURL = data.url;
    var image = $("<img>").attr("src", imgURL);
    $(".url-displayed").append(image);
      

      // Log the data in the console as well
      console.log("<h3> Date:" + data.date + "</h3>");
      console.log("Explanation: " + data.explanation);
      console.log("Title: " + data.title);
      console.log('<img src="'+ data.url +'">');

    });
});
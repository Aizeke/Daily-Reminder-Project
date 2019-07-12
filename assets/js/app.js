$(document).ready(function () {

  // bbs top 10 headlines
  var queryURL = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=22aaeb67a2434db9922c8696bbd7c2e6";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {

      // Log the queryURL
      console.log(queryURL);

      // Log the resulting object
      console.log(response);
    
      for (var i = 0; i < 10; i++) {
        var newsDiv = $("<div>");
        newsDiv.addClass("carousel-item");
        var newsImage = $("<img>").attr("src", response.articles[i].urlToImage);
        newsImage.addClass("d-block w-100");
        newsDiv.append(newsImage);


        // newsLink.attr("href",response.articles[i].url);
        // newsDiv.append(newsLink);
        var capDiv = $("<div>");
        capDiv.addClass("carousel-caption d-none d-md-block");

        var newsTitle = $("<h5>").text(response.articles[i].title);
        // var newsLink = $("<a>");
        // newsTitle.append(newsLink);
        capDiv.append(newsTitle);
        newsDiv.append(capDiv);
        $(".carousel-inner").append(newsDiv);
      }
    });

  // any topic the user is interested in, here im using california for an example
  var topic = "california";
  var queryURL = "https://newsapi.org/v2/top-headlines?q=" + topic + "&apiKey=22aaeb67a2434db9922c8696bbd7c2e6";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function (response) {

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
    .then(function (response) {

      // Log the queryURL
      console.log(queryURL);

      var data = response.data
      // Log the resulting object
      console.log(response.data);

      // Transfer content to HTML
      $(".city").html("<h4>" + data.name + " Weather Details</h4>");
      $(".description").text("Forecast: " + data.weather[0].description);
      $(".temp").text("Temperature (F) " + data.main.temp);
      $(".wind").text("Wind Speed: " + data.wind.speed);
      $(".humidity").text("Humidity: " + data.main.humidity);
      

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
    .then(function (response) {

      // Log the queryURL
      console.log(queryURL);

      var data = response.data
      // Log the resulting object
      console.log(response.data);

      // Transfer content to HTML

      // $(".date").html("<h3>Date:" + data.date + "</h3>");
      $(".explanation").text("Explanation: " + data.explanation);
      $(".title").text("Title: " + data.title);

      var imgURL = data.url;

      function checkURL(url) {
      if (url.match(/\.(jpeg|jpg|gif|png)$/) != null){
    
        var image = $("<img class=nasaimage>").attr("src", imgURL);
        $(".url-displayed").append(image);
      }
      else {
        var video = $("<iframe allowfullscreen>" + imgURL + "</iframe>").attr("src", imgURL);
        $(".url-displayed").append(video);
      }
    }
    checkURL(imgURL);

      // Log the data in the console as well
      console.log("<h3> Date:" + data.date + "</h3>");
      console.log("Explanation: " + data.explanation);
      console.log("Title: " + data.title);
      console.log('<img src="' + data.url + '">');

    });




});
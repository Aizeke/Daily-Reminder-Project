$(document).ready(function(){
    $('#carouselSlideShow').carousel({
        interval: 3000
    });

    $('.prev').on('click', function(){
        $('#carouselSlideShow').carousel('prev')
    });

    $(".next").click(function(){
        $("#carouselSlideShow").carousel("next");
    });
});

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
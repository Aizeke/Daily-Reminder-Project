// Corresponds to the broken carousel but can *probably* delete it soon due to guido's tinkering on his version
$(document).ready(function(){
    $('#carouselSlideShow').carousel();

    $('.prev').on('click', function(){
        $('#carouselSlideShow').carousel('prev')
    });

    $(".next").click(function(){
        $("#carouselSlideShow").carousel("next");
    });

// These buttons will redirect to a different page so users can change and confirm their current info
    $("#nameButton").on("click",(function(){
        
    }
    ))
});


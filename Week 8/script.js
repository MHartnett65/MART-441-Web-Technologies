$(document).ready(function() {
    var images = ["native1.jpg", "native2.jpg", "native3.jpg"];
    var quotes = [
        "The Earth does not belong to us: we belong to the Earth.",
        "Treat the earth well. It was not given to you by your parents, it was loaned to you by your children.",
        "Listen to the wind, it talks. Listen to the silence, it speaks. Listen to your heart, it knows."
    ];

    var currentIndex = 0;

    function rotateImages() {
        currentIndex = (currentIndex + 1) % images.length;

        
        var shapePath = "<path d='M10 10 L90 10 L50 90 Z' fill='#804000' />";
        $("#shape").html(shapePath);

        
        $("#artwork").slideDown(1000);
        $("#shape").fadeIn(1000, function() {
            
            $(this).fadeOut(1000, function() {
                $(this).html(""); 
                $("#artwork").attr("src", images[currentIndex]).fadeOut(5000);
            });
        });
    }

    function rotateQuotes() {
        $("#text").fadeOut(1000, function() {
            currentIndex = (currentIndex + 1) % quotes.length;
            $(this).text(quotes[currentIndex]).slideDown(1000);
        });
    }

    setInterval(rotateImages, 5000); 
    setInterval(rotateQuotes, 8000); 
});

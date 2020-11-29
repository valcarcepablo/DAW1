$(function() {
    var jqxhr = $.ajax({
        method: "GET",
        url: "books.json",
        cache: false,
        dataType: "json"
    });
    jqxhr.done(function(getArray) {
        var bot_index = 0;                 
        for(let i = 0; i < 4; i++) {
            $('#row-carousel-top').append('<div class="col carousel top">' +
            '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[i].img + '">' + '</div>');
            $('#row-carousel-bot').append('<div class="col carousel bot">' +
            '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[i+4].img + '">' + '</div>');
            }

            $('.carousel-control-next').click(function(){
                bot_index += 4;
                console.log(bot_index % getArray.items.length);
                $(".col.carousel.top").remove();
                $(".col.carousel.bot").remove();
                $('#row-carousel-top').append('<div class="col carousel top">' + 
                '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[Math.abs(bot_index % getArray.items.length)].img + '"></div><div class="col carousel top">' +
                '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[Math.abs((bot_index + 1) % getArray.items.length)].img + '"></div><div class="col carousel top">' +
                '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[Math.abs((bot_index + 2) % getArray.items.length)].img + '"></div><div class="col carousel top">' +
                '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[Math.abs((bot_index + 3) % getArray.items.length)].img + '"></div>');
                $('#row-carousel-bot').append('<div class="col carousel bot">' + 
                '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[Math.abs((bot_index + 4) % getArray.items.length)].img + '"></div><div class="col carousel bot">' +
                '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[Math.abs((bot_index + 5) % getArray.items.length)].img + '"></div><div class="col carousel bot">' +
                '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[Math.abs((bot_index + 6) % getArray.items.length)].img + '"></div><div class="col carousel bot">' +
                '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[Math.abs((bot_index + 7) % getArray.items.length)].img + '"></div>');
            });
            $('.carousel-control-prev').click(function(){
                bot_index -= 4;
                console.log(((bot_index + getArray.items.length) % getArray.items.length));
                $(".col.carousel.top").remove();
                $(".col.carousel.bot").remove();
                $('#row-carousel-top').append('<div class="col carousel top">' +
                '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[Math.abs((bot_index + getArray.items.length) % getArray.items.length)].img + '"></div><div class="col carousel top">' +
                '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[Math.abs((bot_index + 1 + getArray.items.length) % getArray.items.length)].img + '"></div><div class="col carousel top">' +
                '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[Math.abs((bot_index + 2 + getArray.items.length) % getArray.items.length)].img + '"></div><div class="col carousel top">' +
                '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[Math.abs((bot_index + 3 + getArray.items.length) % getArray.items.length)].img + '"></div>');
                $('#row-carousel-bot').append('<div class="col carousel bot">' +
                '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[Math.abs((bot_index + 4 + getArray.items.length) % getArray.items.length)].img + '"></div><div class="col carousel bot">' +
                '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[Math.abs((bot_index + 5 + getArray.items.length) % getArray.items.length)].img + '"></div><div class="col carousel bot">' +
                '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[Math.abs((bot_index + 6 + getArray.items.length) % getArray.items.length)].img + '"></div><div class="col carousel bot">' +
                '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[Math.abs((bot_index + 7 + getArray.items.length) % getArray.items.length)].img + '"></div>');                
            });
            
    });
    
});

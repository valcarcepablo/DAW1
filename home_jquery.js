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
            $('#row-carousel').append('<div class="col carousel"> <a href="./book.html">' +
            '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[i].img + '">' + '</a></div>');
            }

            $('.carousel-control-next').click(function(){
                bot_index++;
                console.log(bot_index % getArray.items.length);
                $(".col.carousel").remove();
                $('#row-carousel').append('<div class="col carousel">' + 
                '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[Math.abs(bot_index % getArray.items.length)].img + '"></div><div class="col carousel">' +
                '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[Math.abs((bot_index + 1) % getArray.items.length)].img + '"></div><div class="col carousel">' +
                '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[Math.abs((bot_index + 2) % getArray.items.length)].img + '"></div><div class="col carousel">' +
                '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[Math.abs((bot_index + 3) % getArray.items.length)].img + '"></div>')                
            });
            $('.carousel-control-prev').click(function(){
                bot_index--;
                console.log(((bot_index + getArray.items.length) % getArray.items.length));
                $(".col.carousel").remove();
                $('#row-carousel').append('<div class="col carousel">' +
                '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[Math.abs((bot_index + getArray.items.length) % getArray.items.length)].img + '"></div><div class="col carousel">' +
                '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[Math.abs((bot_index + 1 + getArray.items.length) % getArray.items.length)].img + '"></div><div class="col carousel">' +
                '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[Math.abs((bot_index + 2 + getArray.items.length) % getArray.items.length)].img + '"></div><div class="col carousel">' +
                '<img class="img-fluid d-block" width="300px" height="500px" src="' + getArray.items[Math.abs((bot_index + 3 + getArray.items.length) % getArray.items.length)].img + '"></div>');                
            });
            
    });
});

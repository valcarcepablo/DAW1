$(function() {
    var jqxhr = $.ajax({
        method: "GET",
        url: "books.json",
        cache: false,
        dataType: "json"
    });
    jqxhr.done(function(getArray) {
        var bot_index = 0;
        $('#cover').html('<img class="img-fluid d-block" src="' + getArray.items[bot_index].img + '">');
        $('#title').html('<p>' + getArray.items[bot_index].title + '</p>');
        $('#author').html('<p class="text-justify">Author: ' + getArray.items[bot_index].author + '</p>');
        $('#date').html('<p class="text-justify">Published: ' + getArray.items[bot_index].date + '</p>');
        $('#genre').html('<p class="text-justify">Genre: ' + getArray.items[bot_index].genre + '</p>');
        $('#plot_summary').html('<p class="text-justify">Plot: ' + getArray.items[bot_index].plot_summary + '</p>');
        $('#price').html('<p class="text-justify">Price: ' + getArray.items[bot_index].price + '</p>');
            $('.carousel-control-next').click(function(){
                bot_index++;
                $('#cover').html('<img class="img-fluid d-block" src="' + getArray.items[Math.abs(bot_index % getArray.items.length)].img + '">');
                $('#title').html('<p>' + getArray.items[Math.abs(bot_index % getArray.items.length)].title + '</p>');
                $('#author').html('<p class="text-justify">Author: ' + getArray.items[Math.abs(bot_index % getArray.items.length)].author + '</p>');
                $('#date').html('<p class="text-justify">Published: ' + getArray.items[Math.abs(bot_index % getArray.items.length)].date + '</p>');
                $('#genre').html('<p class="text-justify">Genre: ' + getArray.items[Math.abs(bot_index % getArray.items.length)].genre + '</p>');
                $('#plot_summary').html('<p class="text-justify">Plot: ' + getArray.items[Math.abs(bot_index % getArray.items.length)].plot_summary + '</p>');
                $('#price').html('<p class="text-justify">Price: ' + getArray.items[Math.abs(bot_index % getArray.items.length)].price + '</p>');
            });
            $('.carousel-control-prev').click(function(){
                bot_index--;
                $('#cover').html('<img class="img-fluid d-block" src="' + getArray.items[Math.abs(bot_index % getArray.items.length)].img + '">');
                $('#title').html('<p>' + getArray.items[Math.abs((bot_index + getArray.items.length) % getArray.items.length)].title + '</p>');
                $('#author').html('<p class="text-justify">Author: ' + getArray.items[Math.abs((bot_index + getArray.items.length) % getArray.items.length)].author + '</p>');
                $('#date').html('<p class="text-justify">Published: ' + getArray.items[Math.abs((bot_index + getArray.items.length) % getArray.items.length)].date + '</p>');
                $('#genre').html('<p class="text-justify">Genre: ' + getArray.items[Math.abs((bot_index + getArray.items.length) % getArray.items.length)].genre + '</p>');
                $('#plot_summary').html('<p class="text-justify">Plot: ' + getArray.items[Math.abs((bot_index + getArray.items.length) % getArray.items.length)].plot_summary + '</p>');
                $('#price').html('<p class="text-justify">Price: ' + getArray.items[Math.abs((bot_index + getArray.items.length) % getArray.items.length)].price + '</p>');
            });            
    })    
});
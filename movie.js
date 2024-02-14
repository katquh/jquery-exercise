$('body').append($('<ul>').text("Movie Ratings"));

$('form').on("submit",function(e){
    e.preventDefault();
    let title = $('#title').val();
    let rating = $('#rating').val();
    let li = $('<li>',{text: `${title} ${rating}`});
    let button = $('<button>').text("Remove");
    li.append(button);
    $('ul').append(li);
    // $('li').append("<button>",{text: "Remove"});
})

$('ul').on("click","button", function(e){
    e.preventDefault();
    $(this).parent().remove();
})
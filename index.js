
$("h1").css("color","purple");
const listItems = $("li").css("font-size","2rem");
listItems.css("color","lime");
// listItems.html("<em>Italic</em>");
$("li").click(function(){
    $("h1").animate({scale: .5});
});

$(document).keypress((e)=>{
    $(".key-press").text(e.key);
});
$("h1").on("mouseover",(e)=>{
    $("h1").css("color","red");
});

$("h1").before("<button>Added before H1</button>");

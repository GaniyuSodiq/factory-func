// JQUERY SYNTAX 
// $(selector).action()
// $ = to call jquery
// (selector) = to pick an HTML element from the page
// .action() = the action you want to run on the selector

$(this).hide() // hides the content of the entire webpage 
// (this) is the window object. the global object in this case

$("p").hide() // hey jquery, find the paragraph tag and hide it!

$(".test").hide() // hey jquery, find the element with test class and hide them!

$("#test").hide() // hey jquery, find element with test id and hide it!

$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});

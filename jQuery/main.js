$(document).ready(function() {



    $("#btn-hide").on('click', () => {
        $("div.my-div").hide(1000);
    })
    $("#btn-show").on('click', () => {
        $("div.my-div").show(1000);
    })
    $("#btn-toggle").on('click', () => {
        $("div.my-div").toggle(1000);
    })
    $("#btn-href").on('click', () => {
        $("#my-a").html("Go to Amazon");
        $("#my-a").attr("href", "http://www.amazon.com");

        // chnageing the style
        // option 1 - update the style attribute
        $("#my-a").css("background-color", "red");

        // option 2 - add a class
        $("#my-a").addClass("text-green");
    })
});

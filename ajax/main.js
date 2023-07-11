$(document).ready(function() {

    function updateDogImg() {
        // $.get("https://dog.ceo/api/breeds/image/random", function(response) {
        //     $("#dog-img").attr("src", response.message);
        // });

        $.ajax({
            url: "https://dog.ceo/api/breeds/image/random",
            success: function(response) {
                $("#dog-img").attr("src", response.message);
            },
            // method: "GET"
        })   
    }

    updateDogImg();

    $("#randomBtn").on('click', updateDogImg);

    $("#aboutBtn").on('click', function() {
        $.get("about.html", function(response) {
            $("#content").html(response);
        })
    });

    $("#contactBtn").on('click', function() {
        $("#content").load("contact.html")
    });

});
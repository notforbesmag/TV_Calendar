$("#yes").click(function() {
    $("#question").text("What I watch depends on the day. What day is today?");
    $("input").css("visibility","visible");
});

$("#no").click(function() {
    $("#question").text("You're just jealous you don't have HBO On Demand!").css("font-weight","bold");
    $("input").css("visibility","hidden");
    $("#answer").css("visibility","hidden");
});

$("#submit").click(function() {
    var weekday = $('#day').val();
    weekday = weekday.toLowerCase();

    if (weekday === "sunday") {
        $("#answer").text("Once Upon A Time. So camp yet engaging.");
    } else if (weekday === "monday") {
        $("#answer").text("I don't know. Probably Netflix.");
    } else if (weekday === "tuesday") {
        $("#answer").text("The Mindy Project! Nothing gets between me and Mindy.").append('<img src="https://38.media.tumblr.com/49c3719f73f659cceb2c284080089995/tumblr_ndwzp6ISlL1s9362xo1_500.gif" />);
    } else if (weekday === "wednesday") {
        $("#answer").text("Catching up on all the shows I missed. Yay Hulu!");
    } else if (weekday === "thursday") {
        $("#answer").text("How to Get Away with Murder! Shonda Rimes is everything!");
    } else if (weekday === "friday") {
        $("#answer").text("GRIMM is back... I miss Portland.");
    } else if (weekday === "saturday") {
        $("#answer").text("Youtube! Cats and Drake music videos only.");
    } else { 
        $("#answer").text("Hmm... Do you need to look at a calendar?");
    }
});
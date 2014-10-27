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
        $("#answer").html('<a href="http://www.hulu.com/once-upon-a-time">Once Upon A Time</a>. So camp yet engaging.');
    } else if (weekday === "monday") {
        $("#answer").html('No idea. Probably <a href="http://www.netflix.com>"Netflix</a>.');
    } else if (weekday === "tuesday") {
        $("#answer").html('<a href="http://www.hulu.com/the-mindy-project">The Mindy Project</a>! Nothing gets between me and Mindy.').append('<img src="https://38.media.tumblr.com/49c3719f73f659cceb2c284080089995/tumblr_ndwzp6ISlL1s9362xo1_500.gif" />');
    } else if (weekday === "wednesday") {
        $("#answer").html('Catching up on all the shows I missed. Yay <a href="http://www.hulu.com/">Hulu</a>!');
    } else if (weekday === "thursday") {
        $("#answer").html('<a href="http://www.hulu.com/how-to-get-away-with-murder">How to Get Away with Murder</a>! Shonda Rimes is everything!');
    } else if (weekday === "friday") {
        $("#answer").html('<a href="http://www.hulu.com/grimm">Grimm</a> is back... I miss Portland.');
    } else if (weekday === "saturday") {
        $("#answer").html('<a href="http://www.youtube.com/>"Youtube</a>! Cat videos only.'');
    } else { 
        $("#answer").text("Hmm... Do you need to look at a calendar?");
    }
});
//tell browswer to load 1)html & 2) css first
$(document).ready(function () {

    // display current date at top of caledar
    $("#currentDay").text(moment().format("MMMM D YYYY, h:mm:ss a"));

    // event listener for button click
    $(".save").on("click", function () {
        var text = $(this).siblings(".task").val();
        var time = $(this).parent().attr("id");

        //save items in local storage.
        localStorage.setItem(time, text);
    })
    // set parameters for local storage information
    $("#hr9 .task").val(localStorage.getItem("hr9"));
    $("#hr10 .task").val(localStorage.getItem("hr10"));
    $("#hr11 .task").val(localStorage.getItem("hr11"));
    $("#hr12 .task").val(localStorage.getItem("hr12"));
    $("#hr13 .task").val(localStorage.getItem("hr13"));
    $("#hr14 .task").val(localStorage.getItem("hr14"));
    $("#hr15 .task").val(localStorage.getItem("hr15"));
    $("#hr16 .task").val(localStorage.getItem("hr16"));
    $("#hr17 .task").val(localStorage.getItem("hr17"));

    // Set current hour to compare to work day scheduler task/time
    function trackHours() {
        var currentTime = moment().hour();
        console.log(currentTime)

        // If/else function to compare scheduled tasks' times against current time

        $(".time").each(function () {
            var hourBlock = parseInt($(this).attr("id").split("hr")[1]);
            console.log(hourBlock, currentTime)

            if (hourBlock < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");

            } else if (hourBlock === currentTime) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");

            } else {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }

        })

    }
    // continue running function upon browser refresh
    trackHours();

})

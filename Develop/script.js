$(document).ready(function () {

    //display current time & day
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); // use of moment.js

    // event listener for saving a task on the calendar
    $(".save").on("click", function () {

        console.log(this);
        var task = $(this).siblings(".task").val();
        var time = $(this).parent().attr("id");

        //save task and time to localStorage 
        localStorage.setItem(time, task);
    })

    //load data saved to local storage on the scheduler
    $("#hr9 .task").val(localStorage.getItem("hr9"));
    $("#hr10 .task").val(localStorage.getItem("hr10"));
    $("#hr11 .task").val(localStorage.getItem("hr11"));
    $("#hr12 .task").val(localStorage.getItem("hr12"));
    $("#hr13 .task").val(localStorage.getItem("hr13"));
    $("#hr14 .task").val(localStorage.getItem("hr14"));
    $("#hr15 .task").val(localStorage.getItem("hr15"));
    $("#hr16 .task").val(localStorage.getItem("hr16"));
    $("#hr17 .task").val(localStorage.getItem("hr17"));

    // create function to keep tracck of the current hour so it can be used in the if-else statements to change color formatting

    function timeCompare() {
        //establihs variable for current time by using moment.js
        var currentTime = moment().hour();

        // create conditional logic via if-else function using jQuery 'each' method to loop through time sets
        $(".time").each(function () {
            var timeHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(timeHour, currentTime)

            //establish if-else logic to trigger changes on the frontend re: colors of time sets

            if (timeHour < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (timeHour === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    timeCompare();
})

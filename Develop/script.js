$(document).ready(function () {
    // tell browser to load HTML and CSS first
    // display current day and time

    // var todayDate = moment().format("dddd, MMM Do YYYY");
    // $("#currentDay").html(todayDate);
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

});
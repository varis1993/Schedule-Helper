$(document).ready(function () {


    function timeSlot () {
        var currentHour = today.hours();
        $(".time-block").each(function () {

            
            var divTimeId = parseInt($(this).attr("id"));
             console.log(divTimeId);


            if (divTimeId < currentHour) {
                $(this).addClass("past");


            } else if (divTimeId === currentHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");


            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
     }

    // Header Time
    var today = moment();
    $("#sameDay").text(today.format("LLLL"));
    $(".saveBtn").on("click", function () {
        var textValue = $(this).siblings(".description").val();
        var timeKey = $(this).parent().attr("id");
        localStorage.setItem(timeKey, textValue);
    })
    
    $("#7 .description").val(localStorage.getItem("7"));
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    
    timeSlot ();
    
    })
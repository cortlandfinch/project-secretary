// displays current date and time in header
var datetime = moment().format('LLL');
$("#local-date").append(datetime);

// for past - present - future time blocks for colored rows
var currentTime = moment().hour();
var taskText = $(".task-text");
// function to add and remove color depending on time of day for past - present - future tasks
taskText.each(function () {
    // using parseInt method to take textarea id to compare to use as integer for compairison to currentTime hour
    let newTask = parseInt($(this).attr('id'));
        
        // if statement for row associated hour setting to if equals current hour then adding the class of present
        if (newTask === currentTime) {
            $(this).addClass("present");
        // else if statement for row associated hour setting to if less than current hour then adding the class of past
        } else if (newTask < currentTime) {
            $(this).addClass("past");
        // else if statement for row associated hour setting to if greater than current hour then adding the class of future
        } else if (newTask > currentTime) {
            $(this).addClass("future");
        // else if statement for rows to default to white when not in current business hours
        } else if((currentTime>= 18) || (currentTime<= 7)) {
            $(this).addClass("white");
        } else{
            $(this).addClass("white");
        }
});

// for saveBtn to save text area on click

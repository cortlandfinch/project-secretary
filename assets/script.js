// for saveBtn to save text area on click
$('.saveBtn').click(function() {
    // using jquery siblings of textarea to get value user types in
    var meeting = $(this).siblings(".description").val();
    // using jquery parent to get id associated with the row for that time slot
    var time = $(this).parent().attr("id");
    // using localStorage to set the time and meeting to user local storage
    localStorage.setItem(time, meeting);
})

// using row ID and class description to get the value stored in user local storage in text area on page refresh
$("#8 .description").val(localStorage.getItem('8'));
$("#9 .description").val(localStorage.getItem('9'));
$("#10 .description").val(localStorage.getItem('10'));
$("#11 .description").val(localStorage.getItem('11'));
$("#12 .description").val(localStorage.getItem('12'));
$("#13 .description").val(localStorage.getItem('13'));
$("#14 .description").val(localStorage.getItem('14'));
$("#15 .description").val(localStorage.getItem('15'));
$("#16 .description").val(localStorage.getItem('16'));
$("#17 .description").val(localStorage.getItem('17'));

// displays current date and time in header
var datetime = moment().format('LLL');
$("#local-date").append(datetime);

// for past - present - future time blocks for colored rows
var currentTime = moment().hour();
var taskText = $(".row");
// function to add and remove color depending on time of day for past - present - future tasks
taskText.each(function () {
    // using parseInt method to take textarea id to compare to use as integer for compairison to currentTime hour
    let newTask = parseInt($(this).attr("id"));
        
        // if statement for row associated hour setting to if equals current hour then adding the class of present
        if (newTask === currentTime) {
            $(this).addClass("present");
        // else if statement for row associated hour setting to if less than current hour then adding the class of past
        } else if (newTask < currentTime) {
            $(this).addClass("past");
        // else statement for rows to have future class
        } else {
            $(this).addClass("future");
        } 
});
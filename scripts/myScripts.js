/* Your Custom jQuery*/


/* Document Ready */
$(document).ready(function() {

/* Test */
console.log("jQuery is Working");

/* Bootstrap Modal*/
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus();
  console.log("I was clicked");
});

/* Bootstrap Popover*/
$('[data-toggle="popover"]').popover();
 
/* Scroll To*/ 
$("#learn-more").click(function(e) {
 e.preventDefault();
    $('html body').animate({
        scrollTop: $("#value").offset().top
    }, 500);
});

$("#my-journey-button").click(function(e) {
 e.preventDefault();
    $('html body').animate({
        scrollTop: $("#my-journey").offset().top
    }, 500);
});


});
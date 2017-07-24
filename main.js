
function main() {
//  $('.navbar navbar-inverse').hide();
//  $('.navbar navbar-inverse').fadeIn(1000);
 
  $('#wrapper').hide();
  $('#wrapper').fadeIn(3000);





 // $('.projects').hide();
  
 // $('.projects-button').on('click', function() {
		// $(this).next().toggle();
  //  $(this).next().slideToggle(4000);
  //  $(this).toggleClass('active');
   // $(this).text('Projects Viewed');
//	});
}


$(document).ready(main);

$(document).ready(function() {
   $('#myNavbar').on('click', function() {
     $('#overlay').animate({
       opacity: 1,
     }, 5000, function() {
        // Animation complete.
     });
   }); 
});
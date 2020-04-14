/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// remove the focused state after click,
// otherwise bootstrap will still highlight the link
$("a").mouseup(function(){
    $(this).blur();
})

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var about_position = $("#about").offset().top - 20;
  var features_position = $("#features").offset().top - 20;
  var showcase_position = $("#showcase").offset().top - 20;
  var pricing_position = $("#pricing").offset().top - 20;
  var signup_position = $("#signup").offset().top - 20;

  if ((scroll > about_position && scroll < features_position) ||
      (scroll > showcase_position && scroll < pricing_position) ||
      (scroll > signup_position)
     ) {
    $(".navbar").addClass("nav-dark");
    $("#logo").attr("src","img/edgebenchmark-transparent-dark.png");
    $(".navbar-toggle").css({"color": "white"});
  }
  else if ((scroll > features_position && scroll < showcase_position) ||
           (scroll > pricing_position && scroll < signup_position))
  {
    $(".navbar").removeClass("nav-dark");
    $("#logo").attr("src","img/edgebenchmark-transparent-light.png");
    $(".navbar-toggle").css({"color": "black"});
  }
  else {
    $(".navbar").removeClass("nav-dark");
    $("#logo").attr("src","img/edgebenchmark-transparent-light.png");
    $(".navbar-toggle").css({"color": "black"});
  }

});

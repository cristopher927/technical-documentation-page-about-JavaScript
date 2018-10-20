var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}

$(document).ready(function(){
    $(".show-menu").click(function(){
        $("#navbar").toggle();
    });
    var $navbar = $('#navbar');
    var $menu = $('.show-menu');

    $(document).click(function (event) {
       if (!$navbar.is(event.target) // if the target of the click isn't the container...
       && !$menu.is(event.target)) // ... nor a descendant of the container
       {
         $navbar.hide();
      }
     });    
});            


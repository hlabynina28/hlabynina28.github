$(document).ready(function () {
    $('.slider').slick({  
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 3,
   dots:true,
    responsive: [
   {
     breakpoint: 800,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1
     }
   }
 ]
 });
});
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 25) {
    $(".header-area").addClass("sticky");
  } else {
    $(".header-area").removeClass("sticky");
  }
});

// init Isotope
var $grid = $(".protfolio-item").isotope({});
// filter items on button click
$(".food-item").on("click", "li", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});
// Active
$(".food-item").on("click", "li", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

// Gallery
var $grid = $(".protfolio-item").isotope({});
// filter items on button click
$(".gallery-menu").on("click", "li", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});
// Active
$(".protfolio").on("click", "li", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

$(document).ready(function () {
  $(".testmonial").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  });
});

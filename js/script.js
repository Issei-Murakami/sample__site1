$(function () {
  $(function () {
    $("html,body").animate({ scrollTop: 0 }, "1");
  });

  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    arrows: false,
    focusOnSelect: true,
    centerPadding: "200px",
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".accordion-outer").click(function () {
    $(this).next().slideToggle();
  });
  $(".btn-gNav span").click(function () {
    $(".nav-menu-sp").toggleClass("show");
    $(".line1").toggleClass("deg1");
    $(".line2").toggleClass("deg2");
    $(".line3").toggleClass("deg3");
  });
  $(".nav-menu-sp a").click(function () {
    $(".nav-menu-sp").toggleClass("show");
    $(".line1").toggleClass("deg1");
    $(".line2").toggleClass("deg2");
    $(".line3").toggleClass("deg3");
  });
});

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
  $("#icon").click(() => {
    if ($(".menu").hasClass("menus")) {
      $(".menu").removeClass("menus");
      $("#icon").removeClass("fa-x");
      $("#icon").addClass("fa-bars");
    } else {
      $(".menu").addClass("menus");
      $("#icon").removeClass("fa-bars");
      $("#icon").addClass("fa-x");
    }
  });
});

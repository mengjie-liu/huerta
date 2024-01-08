$(document).ready(function () {
  $(".links")
    .mouseenter(function () {
      $(this).css({
        "text-decoration": "underline",
        "text-underline-offset": "0.5rem",
      });
    })
    .mouseleave(function () {
      $(this).css({
        "text-decoration": "none",
      });
    });

  let lastHeight;
  $("img").on("load", function () {
    lastHeight = $("img:last-of-type")[0].offsetHeight;
  });
  $(".imgs").on("scroll", function () {
    // console.log($(".imgs").scrollTop());
    if (
      $(".imgs")[0].scrollTop >=
      $(".imgs")[0].scrollHeight - lastHeight - 64 * 4 - 24
    ) {
      console.log("bottom");
      $(".NY").addClass("disabled");
      $(".TJ").removeClass("disabled");
    } else {
      $(".NY").removeClass("disabled");
      $(".TJ").addClass("disabled");
    }
  });
});

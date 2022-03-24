// Progress bars
$(document).ready(function () {
  $(".progress .progress-bar").css("width", function () {
    return $(this).attr("aria-valuenow") + "%";
  });
});

$("#play").on("click", function (e) {
  e.preventDefault();
  $("#player")[0].src += "?autoplay=1";
  $("#player").show();
  $("#video-cover").hide();
  $("#play").hide();
});

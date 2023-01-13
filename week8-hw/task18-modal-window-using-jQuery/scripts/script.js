$(document).ready(function () {
  $("#open-btn").click(() => {
    $("#my-modal").addClass("show")
  });

  $("#close-btn").click(() => {
    $("#my-modal").removeClass("show");
  });
});

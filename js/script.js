$(document).ready(function () {
  $("#stamp1, #stamp2,#stamp3").on("click", function () {
    var srcGet = $(this).attr("src");
    $("#preview").attr("src", srcGet);
  });
});
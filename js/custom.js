$( document ).ready(function() {
  $("#open-btn").click(function(){
    $(".side-nav").addClass("show");
  });
  $("#close-btn").click(function(){
    $(".side-nav").removeClass("show");
  });
});
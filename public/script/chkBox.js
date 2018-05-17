$(document).ready(function () {
  $('#deleteBut').click(function () {
    $(".chkDiv").toggleClass('hidden');
    $('.chk').prop('checked', false);
    $('#searchbut').css('display','none');
    $('#trashButton').css('display','none');
  });

  $("#plusButton").click(function(){
    if(!$(".chkDiv").hasClass('hidden')){
      $(".chkDiv").addClass('hidden');
      $('.chk').prop('checked', false);
      $('#searchbut').css('display','none');
      $('#trashButton').css('display','none');
    }
  })
});

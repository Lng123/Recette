$(document).ready(function () {
  $('#select').click(function () {
    $(".chkDiv").toggleClass('hidden');
    $('#selectAll').toggleClass('hidden');

    if ((".chkDiv").hasClass('hidden')){
      $('.chk').prop('checked', false);
      $('#searchbut').addClass('hidden');
      $('#trashButton').addClass('hidden');
    }
  });

  $("#plusButton").click(function () {
    if (!$(".chkDiv").hasClass('hidden')) {
      $(".chkDiv").addClass('hidden');
      $('.chk').prop('checked', false);
      $('#searchbut').addClass('hidden');
      $('#trashButton').addClass('hidden');
      $('#selectAll').addClass('hidden');
    }
  })
});

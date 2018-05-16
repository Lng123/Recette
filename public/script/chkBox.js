$(document).ready(function () {
  $('#deleteBut').click(function () {
    $(".chkDiv").toggleClass('hidden');
    $('.chk').prop('checked', false);
    if_chk_checked();
  });
});

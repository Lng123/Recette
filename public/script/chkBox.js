console.log("abc");
$(document).ready(function () {
      $('#deleteBut').click(function () {
        var $card = $('.card');
        $card.toggleClass('isOut')
        var isOut = $card.hasClass('isOut')
        $card.animate({
          marginLeft: isOut ? '100px' : '-10px'
        }, 500);
      });
   
    });
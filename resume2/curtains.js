function center(e, VOffset, HOffset){
  $(e).css( {'top': (($(window).height()/2)-($(e).outerHeight(true)/2)+(VOffset)) +'px', 'left': (($(window).width()/2)-($(e).outerWidth(true)/2))+(HOffset) +'px' } );
}

$(document).ready(function() {

  //center('#center', 0, 0);

  $("body").on('keydown', function(e){
    if(e.which == 32){
      $(this).blur();
      //$("#center").fadeOut("slow", "linear");

      $(this).stop().animate({top: '0px' }, {queue:false, duration:350, easing:'easeOutBounce'});
      $(".left-side").stop().animate({width:'0px'}, 2000 );
      $(".right-side").stop().animate({width:'0px'},2000 );

      setTimeout(function() {
	$('body').off("keydown");
      }, 500);

      return false;
    }
  });

});


//function $(id){ return document.getElementById(id); }

var s = $('#slider');

s.bind('vmousedown', function(){
  $("#console").prepend("touch start");

});

s.bind('vmousemove', function(event) {
  event = event.originalEvent;
  event.preventDefault();
  var el = event.target;
  var touch = event.touches[0];
  curX = touch.pageX - this.offsetLeft - 73;
  if(curX <= 0) return;
  if(curX > 550){
    $('well').style.opacity = 0;
  }
  el.style.webkitTransform = 'translateX(' + curX + 'px)';
  $("#console").prepend("touch move");
});

s.bind('vmouseup', function(event) {
  this.style.webkitTransition = '-webkit-transform 0.3s ease-in';
  this.bind( 'webkitTransitionEnd', function( event ) { this.style.webkitTransition = 'none'; }, false );
  this.style.webkitTransform = 'translateX(0px)';
  $("#console").prepend("touch end");
});
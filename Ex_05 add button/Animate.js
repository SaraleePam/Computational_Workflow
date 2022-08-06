
function makeNewPosition(){

  // Taking in account shape size to avoid glitch
  var shapeHeight = $('.container').height() - 50;
  var shapeWidth = $('.container').width() - 50;

  var nh = Math.floor(Math.random() * shapeHeight);
  var nw = Math.floor(Math.random() * shapeWidth);

  //console.log(nh,nw);

  return [nh,nw];

}

var animate = function() {
  animateShape('.button');
};

// Starts animation without having to wait for interval
animate();

// Set loop with interval
loop = window.setInterval(animate, 500);

function animateShape(shapeClass){

  var newq = makeNewPosition();

  $(shapeClass).css({'transform' : 'translate(' + newq[1] +'px, ' + newq[0] + 'px)'});

}

function stopLoop(type) {

  // Breaks the loop
  clearInterval(loop);

  // Speed up shapes repositioning
  $('.button').css({
      'transform' : 'translate(10px, 10px)',
      'transition': 'all 0.3s linear'
  });

  if (type == 'vertical') {
      // Moves the three shapes in predetermined positions
      $('.a').css({'transform' : 'translate(50px, 0)'});
      $('.b').css({'transform' : 'translate(50px, 0)'});
      $('.c').css({'transform' : 'translate(50px, 0)'});
  }

  if (type == 'horizontal') {
      // Moves the three shapes in predetermined positions
      $('.a').css({'transform' : 'translate(0, 50px)'});
      $('.b').css({'transform' : 'translate(0, 50px)'});
      $('.c').css({'transform' : 'translate(0, 50px)'});
  }


}

function restartLoop() {

  // Reset animation speed after repositioning
  $('.button').css({
      'transition': 'all 3s linear'
  });

  // Restarts animation without waiting
  animate();

  // Restarts loop on same instance
  loop = window.setInterval(animate, 500);

}
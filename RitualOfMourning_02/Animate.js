// {
//   name: 'user',
//   text: 'memory'
//   img: 'url from storage'
// }
// db.collection('users')
//   .get()
//   .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       const imgElem = document.createElement('img');
// imgElem.setAttribute('id', doc.id)
//       imgElem.src = doc.url;

//       document.appendChild;
//       console.log(`${doc.id} => ${doc.data()}`);
//     });
//   });

// // CSS Selector
// const testFloat = document.getElementById('test-float');
// testFloat.addEventListener('click', (e) => {
//   const textInside = testFloat.getElementsByClassName('test-floating-text');
//   if (textInside[0].classList.contains('disabled')) {
//     textInside[0].classList.remove('disabled');
//   } else {
//     textInside[0].classList.add('disabled');
//   }
// });

// let countId = 0;
// setInterval(() => {
//   let diff = 2;
//   if (countId > 20) {
//     diff = -2;
//   }

//   const currTop = testFloat.style.top;
//   const currTopInt = parseInt(currTop);
//   const newTop = `${currTopInt + diff}px`;
//   testFloat.style.top = newTop;

//   const currLeft = testFloat.style.left;
//   const currLeftInt = parseInt(currLeft);
//   const newLeft = `${currLeftInt + diff}px`;
//   testFloat.style.left = newLeft;

//   if (countId > 20) {
//     countId = 0;
//   } else {
//     countId++;

//   }
// }, 50);

////////////////////////

// const dude = document.getElementById('test-float') ;

//     // set the anchor point so the texture is centered on the sprite
//     dude.anchor.set(0.5);

//     // set a random scale for the dude - no point them all being the same size!
//     dude.scale.set(0.8 + Math.random() * 0.3);

//     // finally lets set the dude to be at a random position..
//     dude.x = Math.random() * app.screen.width;
//     dude.y = Math.random() * app.screen.height;

//     dude.tint = Math.random() * 0xFFFFFF;

//     // create some extra properties that will control movement :
//     // create a random direction in radians. This is a number between 0 and PI*2 which is the equivalent of 0 - 360 degrees
//     dude.direction = Math.random() * Math.PI * 2;

//     // this number will be used to modify the direction of the dude over time
//     dude.turningSpeed = Math.random() - 0.8;

//     // create a random speed for the dude between 2 - 4
//     dude.speed = 2 + Math.random() * 2;

//////////////////////////

function makeNewPosition() {
  // Taking in account shape size to avoid glitch
  var shapeHeight = $('.bubbleContainer').height() - 30;
  var shapeWidth = $('.bubbleContainer').width() - 30;

  var nh = Math.floor(Math.random() * shapeHeight);
  var nw = Math.floor(Math.random() * shapeWidth);

  //console.log(nh,nw);

  return [nh, nw];
}

// var animate = function () {
//   animateShape('.fly');
// };

var animateRandom = function () {
  const elems = document.getElementsByClassName('fly');
  for (let i = 0; i < elems.length; i++) {
    const elem = elems[i];
    var newq = makeNewPosition();
    elem.style.transform = `translate(${newq[1]}px, ${newq[0]}px)`;
  }
};

var animateRandom2 = function () {
  const elems = document.getElementsByClassName('fly');
  for (let i = 0; i < elems.length; i++) {
    const elem = elems[i];
    if (elem.classList.contains('animate-pos')) {
      elem.classList.add('animate-neg');
      elem.classList.remove('animate-pos');
    } else {
      elem.classList.add('animate-pos');
      elem.classList.remove('animate-neg');
    }
  }
};

// Starts animation without having to wait for interval
animateRandom2();

// Set loop with interval
loop = window.setInterval(animateRandom2, 800);

// function animateShape(shapeClass) {
//   var newq = makeNewPosition();

//   $(shapeClass).css({ transform: 'translate(' + newq[1] + 'px, ' + newq[0] + 'px)' });
// }

// function stopLoop(type) {
//   // Breaks the loop
//   clearInterval(loop);

//   // Speed up shapes repositioning
//   $('.fly').css({
//     transform: 'translate(10px, 10px)',
//     transition: 'all 0.3s ease-in',
//   });

//   if (type == 'vertical') {
//     // Moves the three shapes in predetermined positions
//     $('.a').css({ transform: 'translate(50px, 0)' });
//     $('.b').css({ transform: 'translate(50px, 50px)' });
//     $('.c').css({ transform: 'translate(50px, 100px)' });
//     $('.d').css({ transform: 'translate(50px, 150px)' });
//   }

//   if (type == 'horizontal') {
//     // Moves the three shapes in predetermined positions
//     $('.a').css({ transform: 'translate(0, 50px)' });
//     $('.b').css({ transform: 'translate(50px, 50px)' });
//     $('.c').css({ transform: 'translate(100px, 50px)' });
//     $('.d').css({ transform: 'translate(150px, 50px)' });
//   }
// }

function restartLoop() {
  // Reset animation speed after repositioning
  $('.fly').css({
    transition: 'all 3s linear',
  });

  // Restarts animation without waiting
  animate();

  // Restarts loop on same instance
  loop = window.setInterval(animate, 900);
}

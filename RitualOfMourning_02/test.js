const submitButton = document.getElementById('submit-button');

submitButton.addEventListener(
  'click',
  (e) => {
    fetch('url');

    console.log(e);
    alert('test');
  },
  false
);

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

// CSS Selector
const testFloat = document.getElementById('test-float');
testFloat.addEventListener('click', (e) => {
  const textInside = testFloat.getElementsByClassName('test-floating-text');
  if (textInside[0].classList.contains('disabled')) {
    textInside[0].classList.remove('disabled');
  } else {
    textInside[0].classList.add('disabled');
  }
});

let countId = 0;
setInterval(() => {
  let diff = 10;
  if (countId > 10) {
    diff = -10;
  }

  const currTop = testFloat.style.top;
  const currTopInt = parseInt(currTop);
  const newTop = `${currTopInt + diff}px`;
  testFloat.style.top = newTop;

  const currLeft = testFloat.style.left;
  const currLeftInt = parseInt(currLeft);
  const newLeft = `${currLeftInt + diff}px`;
  testFloat.style.left = newLeft;
  if (countId > 20) {
    countId = 0;
  } else {
    countId++;
  }
}, 50);







////////////////////////

const dude = document.querySelector('test-floating-img') ;

    // set the anchor point so the texture is centered on the sprite
    dude.anchor.set(0.5);

    // set a random scale for the dude - no point them all being the same size!
    dude.scale.set(0.8 + Math.random() * 0.3);

    // finally lets set the dude to be at a random position..
    dude.x = Math.random() * app.screen.width;
    dude.y = Math.random() * app.screen.height;

    dude.tint = Math.random() * 0xFFFFFF;

    // create some extra properties that will control movement :
    // create a random direction in radians. This is a number between 0 and PI*2 which is the equivalent of 0 - 360 degrees
    dude.direction = Math.random() * Math.PI * 2;

    // this number will be used to modify the direction of the dude over time
    dude.turningSpeed = Math.random() - 0.8;

    // create a random speed for the dude between 2 - 4
    dude.speed = 2 + Math.random() * 2;

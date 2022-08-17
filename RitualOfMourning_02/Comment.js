let form = document.querySelector('form');
let tweetinput_name = document.getElementById('Username');
let tweetinput_note = document.getElementById('Note');
let submitTweetButton = document.getElementById('submit-button');
let tweetContainer = document.querySelector('ul');
// let UploadPic = document.querySelector('input[type="file"]');
let LightGroup = document.querySelector('.LightGroup');
let Light = document.querySelector('.Light');
let bubbleContainer = document.querySelector('.bubbleContainer');

let lights = {
  "lightList": []
};

//////////////////////////

window.addEventListener('load', pageLoadFn);
submitTweetButton.addEventListener('click', addLight);
// UploadPic.addEventListener('change', Upload);


function pageLoadFn(event) {
  console.log(event)
  if(localStorage.getItem('lights') === null){
    return
  } else {

    lights = JSON.parse(localStorage.getItem('lights'));
    console.log(lights)
    lights.lightList.forEach(displayLight); 
  }
}

////////////////////////
// function Upload() {
//   if (this.files && this.files[0]) {
//     var img = document.querySelector('img');
//     img.onload = () => {
//       URL.revokeObjectURL(img.src); // no longer needed, free memory
//     };

//     img.src = URL.createObjectURL(this.files[0]); // set src to blob url
//   }
// }
///////////////////////////
///////////////////////////

///////////////////////////

function sendLight(event) {
  event.preventDefault();
  displayLight();
  addLight();
}

////////////////////////////
function ramdomCharacter() {
  const alphabet = 'abcd';
  const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];

  return randomCharacter;
}

////////////////////////////

const animatePatterns = ['animate-vertical-1', 'animate-vertical-2'];
const getAnimatePattern = () => {
  // Write a logic to randomize the patterns.
  const pattern = animatePatterns[Math.floor(Math.random() * animatePatterns.length)];

  return pattern;
};

const animateDirection = ['animate-pos', 'animate-neg'];
const getAnimateDirection = () => {
  // Randomize the direction
  const randNum = Math.random();
  if (randNum > 0.5) return animateDirection[0];
  return animateDirection[1];
};

function getInitialPosition() {
  // Taking in account shape size to avoid glitch
  var shapeHeight = $('.bubbleContainer').height() - 30;
  var shapeWidth = $('.bubbleContainer').width() - 30;

  var nh = Math.floor(Math.random() * shapeHeight);
  var nw = Math.floor(Math.random() * shapeWidth);

  return [nh, nw];
}

function displayLight(light) {
  console.log(light)
  const newLight = document.createElement('div');
  newLight.innerText = `${light.name}`;
  newLight.classList.add('LightGroup');
  newLight.classList.add(ramdomCharacter());
  newLight.classList.add('fly');

  // Set animation pattern
  newLight.classList.add(getAnimatePattern());
  newLight.classList.add(getAnimateDirection());

  // Get Initial Position
  const initPos = getInitialPosition();
  newLight.style.left = initPos[1] + 'px';
  newLight.style.top = initPos[0] + 'px';

  // Set toggle inner panel
  const newLightPanel = document.createElement('div');
  newLightPanel.innerText = `${light.note}`;
  newLightPanel.classList.add('lightGroupInnerPanel');
  newLightPanel.classList.add('disabled');

  newLight.appendChild(newLightPanel);
  bubbleContainer.appendChild(newLight);

  newLight.addEventListener('click', (e) => {
    const innerPanel = newLight.getElementsByClassName('lightGroupInnerPanel');
    if (innerPanel[0].classList.contains('disabled')) {
      innerPanel[0].classList.remove('disabled');
    } else {
      innerPanel[0].classList.add('disabled');
    }
  });
  form.reset();
}

///////////////////////////

function addLight(e) {
  e.preventDefault();
//   console.log('This Works');
  let newName = tweetinput_name.value;
  let newNote = tweetinput_note.value;

  console.log(newName, newNote)

  lightObject = {
    name: newName,
    note: newNote
  };

  displayLight(lightObject)
  console.log(lights);
  lights.lightList.push(lightObject);
//   // store the weet in local store
  localStorage.setItem('lights', JSON.stringify(lights));
}

//////////////////////////////

// function displayTweet(tweet) {
//   console.log(tweet);
//   if (tweet == '') return null;
//   let newListItem = document.createElement('li');
//   newListItem.textContent = ` ${tweet.Username}`;
//   tweetContainer.appendChild(newListItem);
//   form.reset();
// }

//////////////////////////////



///////////////////////////////

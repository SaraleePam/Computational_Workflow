let form =document.querySelector('form')
let tweetinput =document.getElementById('Username')
let submitTweetButton = document.getElementById('submit-button')
let tweetContainer = document.querySelector('ul')
let UploadPic =document.querySelector('input[type="file"]')
let LightGroup = document.querySelector('.LightGroup')
let Light = document.querySelector('.Light')
let bubbleContainer = document.querySelector('.bubbleContainer')

//////////////////////////

window.addEventListener('load', pageLoadFn)
submitTweetButton.addEventListener('click',sendLight)
UploadPic.addEventListener('change', Upload)

////////////////////////
function Upload() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img');
          img.onload = () => {
              URL.revokeObjectURL(img.src);  // no longer needed, free memory
          }

          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
      }
  }
///////////////////////////
///////////////////////////

///////////////////////////

function sendLight(event){  
event.preventDefault()
createNewLight()
addtweet()
}

////////////////////////////


const alphabet = "abcdefghijklmnopqrstuvwxyz"
const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]


////////////////////////////

function createNewLight() {
  const newLight = document.createElement('div');
  newLight.innerText = tweetinput.value;
  newLight.classList.add('LightGroup');
  newLight.classList.add('randomCharacter');
  newLight.classList.add('fly');
  bubbleContainer.appendChild(newLight);
  }


///////////////////////////

function addtweet(e) {

  let tweet = {
    "Username": [],
    'Note' : [],
  }
  
  e.preventDefault();
  console.log('This Works');
  let newTweet =tweetinput.value;
  tweetObject = {
  name: newTweet
}
console.log(tweetObject)

  displayTweet(tweetObject)
  tweet.Username.push(tweetObject)
  // store the weet in local store
  localStorage.setItem('tweet', JSON.stringify(tweet))
}

//////////////////////////////


function displayTweet(tweet) {
  console.log(tweet)
  if(tweet == "") return null;
  let newListItem = document.createElement('li');
  newListItem.textContent = ` ${tweet.Username}`;
  tweetContainer.appendChild(newListItem);
  form.reset();
}



//////////////////////////////

function pageLoadFn(){
  if (localStorage.getItem('tweet') === null){
  return null
}else{
  tweet = JSON.parse(localStorage.getItem('tweet'));
  tweet.Username.forEach(displayTweet);
}
}

/////////////////////////////////






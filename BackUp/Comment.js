let form =document.querySelector('form')
let tweetinput =document.querySelector('input')
let submitTweetButton = document.querySelector('button')
let tweetContainer = document.querySelector('ul')
let tweetCount = document.querySelectorAll('tweet_count');
let count = 30;
tweetCount.innerText = count;

let tweet = {
  "tweetList": [],
  'userList' : [],
}


window.addEventListener('load', pageLoadFn)
submitTweetButton.addEventListener('click',addTweet)
tweetinput.addEventListener('keyup', updateTweetCount);

///////////////////////////

function updateTweetCount(e) {
  if(e.code == 'Backspace'){
    console.log('delete key pressed', e.code)
    count = count + 1
    tweetCount.innerText = count
  } else {
    count = count - 1
    tweetCount.innerText = count
}
}

if (count <= 5) {
  tweetCount.StyleSheet.color =  'red';
  tweetCount.StyleSheet.fontwight =  'normal';

}

///////////////////////////

const dude = PIXI.Sprite.from('examples/assets/eggHead.png');

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


/////////////////////////////////

function addTweet(event) {
  event.preventDefault()
  console.log('This Works')
  let newTweet =tweetinput.value;
  tweetObject = {
  name: newTweet
  }
  displayTweet(tweetObject)
  tweet.tweetList.push(tweetObject)
  // store the weet in local store
  localStorage.setItem('tweet', JSON.stringify(tweet))
}


//-------EVENT HANDLER (CALL BACK FUNCTION)

setTimeout(() => {
  localStorage.removeItem('tweet')
  console.log ('item deleted')
}, "1000")

function pageLoadFn(event){
  if (localStorage.getItem('tweet') === null){
  return
}else{
  tweet = JSON.parse(localStorage.getItem('tweet'))
  tweet.tweetList.forEach(displayTweet)
}
}


function displayTweet(tweet) {
  console.log(tweet)
  if(tweet == "") return null
  let account_name = 'Pam'
  let twitter_handle = '@bot'
  let newListItem = document.createElement('li')
  newListItem.textContent = `${account_name} ${twitter_handle} ${tweet.name}`
  if(tweet.length > count){
    console.log('more than 30 character')
  }else{
    tweetContainer.appendChild(newListItem);
  }
  form.reset()
}







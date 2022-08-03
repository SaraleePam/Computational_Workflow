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




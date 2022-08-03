let form =document.querySelector('form')
let tweetinput =document.querySelector('input')
let submitTweetButton = document.getElementById('submit-button')
let tweetContainer = document.querySelector('ul')
let UploadPic =document.querySelector('input[type="file"]')

let tweet = {
  "tweetList": [],
  'userList' : [],
}


window.addEventListener('load', pageLoadFn)
submitTweetButton.addEventListener('click',addTweet)
UploadPic.addEventListener('change', Upload)

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
  db.setItem('tweet', JSON.stringify(tweet))
}


//-------EVENT HANDLER (CALL BACK FUNCTION)

// setTimeout(() => {
//   db.removeItem('tweet')
//   console.log ('item deleted')
// }, "1000")

function pageLoadFn(event){
  if (db.getItem('tweet') === null){
  return
}else{
  tweet = JSON.parse(db.getItem('tweet'))
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
 
  form.reset()
}







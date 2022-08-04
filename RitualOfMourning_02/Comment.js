let form =document.querySelector('form')
let tweetinput =document.querySelector('input')
let submitTweetButton = document.getElementById('submit-button')
let tweetContainer = document.querySelector('ul')
let UploadPic =document.querySelector('input[type="file"]')
let LightGroup = document.querySelector('.LightGroup')

let tweet = {
  "tweetList": [],
  'userList' : [],
}


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
/////////////////////////////////

function sendLight(event){  
event.preventDefault()
createNewLight()
addtweet()
displayTweet()
pageLoadFn()

}


function createNewLight() {
  const newBtn = document.createElement('Light');
  newBtn.innerText = tweetinput.value;
  LightGroup.appendChild(newBtn);
  }

function addtweet() {
  //event.preventDefault();
  console.log('This Works');
  let newTweet =tweetinput.value;
  tweetObject = {
  name: newTweet
}
console.log(tweetObject)

  displayTweet(tweetObject)
  tweet.tweetList.push(tweetObject)
  // store the weet in local store
  localStorage.setItem('tweet', JSON.stringify(tweet))
}



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
  tweetContainer.textContent = `${tweet.name}`
  
  form.reset()
}





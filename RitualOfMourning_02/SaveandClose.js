
let form =document.querySelector('form')
let Emailinput =document.querySelector('input')
let submitEmailButton = document.getElementById('goodbye-button')
let EmailContainer = document.querySelector('ul')


let Emails = {
  "EmailList": [],
}


window.addEventListener('load', pageLoadFn)
submitEmailButton.addEventListener('click',addEmail)

///////////////////////////
///////////////////////////
///////////////////////////

function addEmail(event) {
  event.preventDefault()
  console.log('Added Email')
  let newEmail =Emailinput.value;
  EmailObject = {
  name: newEmail
  }
  displayEmail(EmailObject)
    Emails.EmailList.push(EmailObject)
  db.setItem('Email', JSON.stringify(Email))
        //////
  
        
    window.close()

}
let GoodbyeBtn = document.getElementById('goodbye-button')
let form =document.querySelector('form')
let Emailinput =document.querySelector('input')
let EmailContainer = document.querySelector('ul')
let Emails = {
  "EmailList": [],
}


GoodbyeBtn.addEventListener('click', sendandnext);



function sendandnext(event) {
  event.preventDefault()
  console.log('Added Email')

  let newEmail =Emailinput.value;

  EmailObject = {
  Email: newEmail
  };


  Emails.EmailList.push(EmailObject);
  localStorage.setItem('Email', JSON.stringify(Emails));
  location.href = "06Blank.html";
}





///////////////////////////
///////////////////////////

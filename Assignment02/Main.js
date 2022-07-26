// Structure

const form = document.querySelector("form");
const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const messageInput = document.querySelector(".message")
const button = document.querySelector("button");

let bubble = document.querySelector('bubble');
let bubbleGrp = document.querySelector('.bubble-group');


const contact = {
	"contactList": []
}




const addNewContact = (e) => {
    e.preventDefault();  

    const newName = nameInput.value;
    const newEmail = emailInput.value;
    const newMessage= messageInput.value;
      


    contactObject = {
        name: newName,
        email: newEmail,
        message: newMessage,
      }
      

    contact.contactList.push(contactObject);

    console.log(contact)

    //localStorage.setItem("contact", JSON.stringify(contact));
    //bubbleGrp.textContent.contact.contactList.contactObject.values(name)[0]
    //bubbleGrp.textContent.contact.contactList.contactObject.values(email)[0]
    //bubbleGrp.textContent.contact.contactList.contactObject.values(message)[0]

/*
    function createNewBubble() {
      const newBubble = document.createElement('bubble');
      newBubble.classList.add('flat');
      newBubble.innerText = bubble.textContent.contact.contactList.contactObject.values(message)[0] ;
      bubbleGrp.appendChild(newBubble)
    }
  */

    //form.reset();

form.addEventListener('submit', addNewContact)

}





///////////////


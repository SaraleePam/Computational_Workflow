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
    //bubbleGrp.textContent.contact.contactList.contactList[0].message
    //bubbleGrp.textContent.contact.contactList.contactList[0].name
    //bubbleGrp.textContent.contact.contactList.contactList[0].email


    function createNewBubble() {
      const newBubble = document.createElement('bubble');
      newBubble.classList.add('flat');
      newBubble.innerText = bubble.textContent.contact.contactList[0].message ;
      bubbleGrp.appendChild(newBubble)
      }


    form.reset();

}



form.addEventListener('submit', addNewContact)


///////////////


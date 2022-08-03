
console.log('this work!')


///////


function keyAlertFn (event) {
    console.log(event);
    let name = event.key;
    let code = event.keyCode;
    alert(`this is the letter ${name} with a code of ${code}`)
    
};


window.addEventListener('keydown', keyAlertFn);

//////////////
//not work yet 

let btn = document.querySelector('button');

function btnIsclick() {
    btn.classList.add('clicked')
}


function btnUnclick() {
    btn.classList.remove('clicked')
}


btn.addEventListener('click', btnIsclick);
btn.addEventListener('???', btnUnclick);


/////////////////////
//not work yet 


function InputAlert (e) {
    let username = nameInput.value;
    alert('username')

}

btn.addEventListener('click', InputAlert);

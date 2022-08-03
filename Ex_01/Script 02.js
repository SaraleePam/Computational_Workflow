let n = prompt('input the noun');
let greeting = document.querySelector('.greeting');

function generatePoem(){
    greeting.innerHTML = 'My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky'
    //console.log ('My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky');
}



generatePoem('n','run','happily')
generatePoem('bird','fly','sadly')


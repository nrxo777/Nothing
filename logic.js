// ********** UI Elements **********

const timer = document.querySelector('#timer');
const message = document.querySelector('#message');
const start_button = document.querySelector('#start-button');
const your_best = document.querySelector('#your-best');

// ********** Event Listeners **********

let start_timing = null;
let play = false;
let value;
let result;

start_button.addEventListener('click', function(e){
    e.preventDefault();
    
    if(start_timing) return;

    play = true;
    value = 0;

    start_button.innerText = "Stop Doing Nothing";
    message.innerText = "You're Doing Nothing right Now..!"

    // if(!start_timing){
        start_timing = setInterval((e) => {
            
            value++
            timer.innerHTML = value;
            result = value;
    
        }, 1000)
    // }

    // stop_doing();
});

document.addEventListener('mouseover', stop_doing);
document.addEventListener('keypress', stop_doing);
document.addEventListener('wheel', stop_doing);

function stop_doing(e) {
    if(!play || !start_timing) return;

    clearInterval(start_timing);
    play = false;
    start_timing = null;

    let li = document.createElement('li')

    if(e.type === 'mouseover'){
        message.innerText = `Aaaaahhhh, you really moved mouse bruhh`;
        your_best.appendChild(li).innerHTML = `You moved mouse at ${result}`;
    } else if(e.type === 'keypress'){
        message.innerText = `C'mon, you pressed god damn key duuudddee`
        your_best.appendChild(li).innerHTML = `You pressed key at ${result}`;
    } else if(e.type === 'wheel'){
        message.innerText = `Bludd, you scrolled mouse wheel :(`
        your_best.appendChild(li).innerHTML = `You scrolled mouse wheel at ${result}`;
    }
    
    start_button.innerText = "Start Doing Nothing AGAINNN";
    
}
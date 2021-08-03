const script = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F'];

const button_change = document.getElementById('button-change');
const color = document.querySelector('.color');
const buttton_reset = document.getElementById('button-reset')

button_change.addEventListener('click', function(){
    let hexColor = '#';
    for(let i=0; i<6; i++){
        hexColor += script[getRandomNumber()]
    }
    // color.textContent = string(hexColor);
    if (color){
        color.textContent = hexColor;
    }
    
    document.body.style.background = hexColor;
})

buttton_reset.addEventListener('click', function(){
    let hexColor = '#FFFFFF'
    color.textContent = hexColor
    document.body.style.background = hexColor


})

function getRandomNumber(){
    return Math.floor(Math.random() * script.length);
}
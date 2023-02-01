document.addEventListener("DOMContentLoaded", function(){
    
    const button1 = document.querySelector('.button1');
    const button2 = document.querySelector('.button2');
    const button3 = document.querySelector('.button3');
    const button4 = document.querySelector('.button4');
    const button5 = document.querySelector('.button5');
    const button6 = document.querySelector('.button6');
    const button7 = document.querySelector('.button7');
    const button8 = document.querySelector('.button8');
    const button9 = document.querySelector('.button9');
    const button0 = document.querySelector('.button0');
    const buttonAdd = document.querySelector('.buttonAdd');
    const buttonSub = document.querySelector('.buttonSub');
    const buttonMul = document.querySelector('.buttonMul');
    const buttonDiv = document.querySelector('.buttonDiv');

    const buttonsList = document.querySelectorAll('.buttons');
    console.log(buttonsList);
    const display = document.querySelector('.display');

    buttonsList.addEventListener('click',buttonClicked,false);

    function buttonClicked(e){
        e.preventDefault();
        if(e.target !== e.currentTarget){
            let buttonVar = e.target.id;
            alert('buttonVar.textContent');
        }
    }


});
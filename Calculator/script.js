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

    const buttonsList = document.querySelector('.buttons');
    console.log(buttonsList);
    const display = document.querySelector('.display');

    buttonsList.addEventListener('click',buttonClicked,false);
    const Answer = {

    }

    function buttonClicked(e){
        let temp = -1;
        e.preventDefault();
        if(e.target !== e.currentTarget){
            switch(e.target.id){
                case 'clearEntry': 
                    temp = 'CE';
                    break;

                case 'clear': 
                    temp = 'C';
                    break;

                case 'backspace': 
                    temp = '<';
                    break;

                case 'inverse': 
                    temp = '^-1';
                    break;

                case 'square': 
                    temp = '^2';
                    break;

                case 'sqrt': 
                    temp = '^1/2';
                    break;

                case 'plusMinus': 
                    temp = '+/-';
                    break;

                case 'decimal': 
                    temp = '.';
                    break;

                case 'button1':
                    temp = 1;
                    break;

                case 'button2': 
                    temp = 2;
                    break;

                case 'button3': 
                    temp = 3;
                    break;

                case 'button4': 
                    temp = 4;
                    break;

                case 'button5': 
                    temp = 5;
                    break;

                case 'button6': 
                    temp = 6;
                    break;

                case 'button7': 
                    temp = 7;
                    break;

                case 'button8': 
                    temp = 8;
                    break;

                case 'button9': 
                    temp = 9;
                    break;

                case 'button0': 
                    temp = 0;
                    break;

                case 'buttonAdd': 
                    temp = '+';
                    break;

                case 'buttonSub': 
                    temp = '-';
                    break;

                case 'buttonMul': 
                    temp = '*';
                    break;

                case 'buttonDiv': 
                    temp = '/';
                    break;

                case 'equals': 
                    temp = '=';
                    break;

            }
            switch(temp){
                case 'CE':
                    display.innerHTML = "";
                    break;
                case 'C':
                    display.innerHTML = "";
                    break;
                case '<':
                    let str = display.innerHTML;
                    display.innerHTML = str.substring(0,str.length-1);
                    break;
                case '=':
                    let s = display.innerHTML;
                    console.log(+s);
                    break;
                

                default:
                    display.innerHTML += temp;
                    break;
            }

             
        }
    }

});
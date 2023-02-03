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
    display.innerHTML = "";


    function evaluate(){
    
        let s = display.innerHTML;
        console.log(s);
        console.log(s.length , "this is s length");
        if(s[s.length-1] == '/' || s[s.length-1] == '*' || s[s.length-1] == '+' || s[s.length-1] == '-'){
            s = s.substring(0, s.length-1);
        }
        
    
    
        var tempA = -1;
        var tempB = -1;
        var ans = -1;
        var start = -1;
        var end = -5;
        // // DIVISION
        while(s.indexOf('/') != -1) {
            let i = s.indexOf('/');
            //look for operators in order of / , * , + , -
    
            console.log(i + 'first / pos');
            //look left
            for(let j = i-1; j >= 0; j--){
                if(j == 0){
                    tempA = s.substring(0,i);
                    start = 0;
                    console.log(tempA + 'this tempA');
                    break;
                }
                
                else if(s[j] == '/' || s[j] == '*' || s[j] == '+' || s[j] == '-'){
                    tempA = s.substring(j+1,i);
                    start = j+1; //j+1 coz we want to include op at j
                    console.log(tempA + 'this tempA');
                    break;
                }
                
            }
    
            
            //look right
            console.log(i);
            for(let j = i+1; j < s.length; j++){
                console.log(j);
                if(j == s.length-1){
                    tempB = s.substring(i+1,s.length);
                    end = -1;
                    console.log(tempB + "this tempBE-1");
                    break;
                }
                else if(s[j] == '/' || s[j] == '*' || s[j] == '+' || s[j] == '-'){
                    tempB = s.substring(i+1,j);
                    end = j;  //not j-1 because last element ignored in substring
                    console.log(tempB + "this tempB");
                    break;
                }
            }
    
            ans = +tempA / +tempB;
            console.log(ans + 'this ans for div');
    
            // if(ans > 0 && start==0){
            //     s = s.substring(0,start) + ans + s.substring(end,s.length);
            //     console.log(s + 'a');
            // }
            if(start == 0 && end == -1){
                s = ans + '';
                console.log(s + 'A');
            }
            else if(start == 0){
                s = ans + s.substring(end,s.length);
                console.log(s + 'B');
            }
            else if(end == -1){
                s = s.substring(0,start) + ans;
                console.log(s + 'C' );
            }
            else{
                s = s.substring(0,start)  + ans + s.substring(end,s.length);
                console.log(s + 'D');
            }
            
        }
        // //MULTIPLICATION
        while(s.indexOf('*') != -1) {
            let i = s.indexOf('*');
            //look for operators in order of / , * , + , -
    
            console.log(i + 'first / pos');
            //look left
            for(let j = i-1; j >= 0; j--){
                if(j == 0){
                    tempA = s.substring(0,i);
                    start = 0;
                    console.log(tempA + 'this tempA');
                    break;
                }
                
                else if(s[j] == '*' || s[j] == '+' || s[j] == '-'){
                    tempA = s.substring(j+1,i);
                    start = j+1; //j+1 coz we want to include op at j
                    console.log(tempA + 'this tempA');
                    break;
                }
                
            }
    
            
            //look right
            for(let j = i+1; j < s.length; j++){
                if(j == s.length-1){
                    tempB = s.substring(i+1,s.length);
                    end = -1;
                    console.log(tempB + "this tempBE0");
                    break;
                }
                else if(s[j] == '*' || s[j] == '+' || s[j] == '-'){
                    tempB = s.substring(i+1,j);
                    end = j;  //not j-1 because last element ignored in substring
                    console.log(tempB + "this tempB");
                    break;
                }
            }
    
            ans = +tempA * +tempB;
            console.log(ans + 'this ans for mul');
    
           
            if(start == 0 && end == -1){
                s = ans + '';
                console.log(s + 'A');
            }
            else if(start == 0){
                s = ans + s.substring(end,s.length);
                console.log(s + 'B');
            }
            else if(end == -1){
                s = s.substring(0,start) + ans;
                console.log(s + 'C' );
            }
            else{
                s = s.substring(0,start)  + ans + s.substring(end,s.length);
                console.log(s + 'D');
            }
            
        }
        //ADDITION
        while(s.indexOf('+') != -1) {
            let i = s.indexOf('+');
            //look for operators in order of / , * , + , -
            let minusNumFound = false;
            //look left
            for(let j = i-1; j >= 0; j--){
                if(j == 0){
                    tempA = s.substring(0,i);
                    start = 0;
                    console.log(tempA + 'this tempAS0');
                    break;
                }
                
                else if(s[j] == '+'){
                    tempA = s.substring(j+1,i);
                    start = j+1; //j+1 coz we want to include op at j
                    console.log(tempA + 'this tempA');
                    break;
                }
                else if(s[j] == '-'){
                    tempA = s.substring(j,i);
                    start = j; //j coz we DO'NT want to include op at j
                    console.log(tempA + 'this tempA');
                    minusNumFound = true;
                    break;
                }
                
            }
    
            
            //look right
            for(let j = i+1; j < s.length; j++){
                if(j == s.length-1){
                    tempB = s.substring(i+1,s.length);
                    end = -1;
                    console.log(tempB + "this tempBE-1");
                    break;
                }
                else if(s[j] == '+' || s[j] == '-'){
                    tempB = s.substring(i+1,j);
                    end = j;  //not j-1 because last element ignored in substring
                    console.log(tempB + "this tempB");
                    break;
                }
            }
            if(minusNumFound){
                ans = +tempA + +tempB;
                if(ans > 0) ans = '+' + ans;
                minusNumFound = false;
            }
            else{ans = +tempA + +tempB;}
            
            console.log(ans + 'this ans for add');
    
            if(start == 0 && end == -1){
                s = ans + '';
                // console.log(typeof(s));
                console.log(s + 'A');
            }
            else if(start == 0){
                s = ans + s.substring(end,s.length);
                console.log(s + 'B');
            }
            else if(end == -1){
                s = s.substring(0,start) + ans;
                console.log(s + 'C' );
            }
            else{
                s = s.substring(0,start)  + ans + s.substring(end,s.length);
                console.log(s + 'D');
            }
            
        }
    // console.log('after while');
        //  // SUBTRACTION
         let count = 0;
         while(s.indexOf('-') != -1) {
            //if s contains only 1 '-' op and it is at 0th position break out of the loop
            if(count == 1 && s.indexOf('-') == 0) break;
            
            let i = s.indexOf('-');
            if(s.indexOf('-') == 0){
                i = s.indexOf('-',1);  //let the below function take care
            }
            console.log(i + 'first - pos');
            //look left
            for(let j = i-1; j >= 0; j--){
                if(j == 0){
                    tempA = s.substring(0,i);
                    start = 0;
                    console.log(tempA + 'this tempAS0');
                    break;
                }
                
                else if(s[j] == '-'){
                    tempA = s.substring(j,i);   //include -sign
                    start = j+1; //j+1 coz we want to include op at j
                    console.log(tempA + 'this tempA');
                    break;
                    }
                
            }
    
            
            //look right
            for(let j = i+1; j < s.length; j++){
                if(j == s.length-1){
                    tempB = s.substring(i+1,s.length);
                    end = -1;
                    console.log(tempB + "this tempBE-1");
                    break;
                }
                else if(s[j] == '-'){
                    tempB = s.substring(i+1,j);
                    end = j;  //not j-1 because last element ignored in substring
                    console.log(tempB + "this tempB");
                    break;
                }
            }
    
            ans = +tempA - +tempB;
            console.log(ans + 'this ans for add');
    
            if(start == 0 && end == -1){
                s = ans + '';
                console.log(s + 'A');
            }
            else if(start == 0){
                s = ans + s.substring(end,s.length);
                console.log(s + 'B');
            }
            else if(end == -1){
                s = s.substring(0,start) + ans;
                console.log(s + 'C' );
            }else{
                s = s.substring(0,start)  + ans + s.substring(end,s.length);
                console.log(s + 'D');
            } 
            
            let temp = 0;
            for(let i = 0;i<s.length; i++){
                
                if(s[i] == '-') temp++;
                count = temp;
            }  
        }
        display.innerHTML = s;


    }


    var temp = 0;
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
                case 'percentage': 
                    temp = '%';
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
                    evaluate();
                    break;
                case '+/-':
                    temp = display.innerHTML;
                    display.innerHTML = +temp * -1;
                    break;
                case '^-1':
                    temp = display.innerHTML;
                    display.innerHTML = Math.pow(+temp,-1);
                    break;
                case '^2':
                    temp = display.innerHTML;
                    display.innerHTML = Math.pow(+temp,2);
                    break;
                case '^1/2':
                    temp = display.innerHTML;
                    display.innerHTML = Math.sqrt(+temp);
                    break;
                case '%':
                    temp = display.innerHTML;
                    display.innerHTML = +temp/100;
                    break;
                default:
                    display.innerHTML += temp;
                    break;
            }

             
        }
    }

 

});















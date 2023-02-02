
    let s = '90+1000/2*5-50+100/1000';
    if(s[s.length-1] == '/' || s[s.length-1] == '*' || s[s.length-1] == '+' || s[s.length-1] == '-'){
        s = s.substring(0, s.length-1);
    }
    console.log(s);


    var tempA = -1;
    var tempB = -1;
    var ans = -1;
    var start = -1;
    var end = -5;
    // DIVISION
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
            s = ans;
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
    //MULTIPLICATION
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

        // if(ans > 0 && start==0){
        //     s = s.substring(0,start) + ans + s.substring(end,s.length);
        //     console.log(s + 'a');
        // }
        if(start == 0 && end == -1){
            s = ans;
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
    // ADDITION
    while(s.indexOf('+') != -1) {
        let i = s.indexOf('+');
        //look for operators in order of / , * , + , -

        console.log(i + 'first + pos');
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
            else if(s[j] == '+' || s[j] == '-'){
                tempB = s.substring(i+1,j);
                end = j;  //not j-1 because last element ignored in substring
                console.log(tempB + "this tempB");
                break;
            }
        }

        ans = +tempA + +tempB;
        console.log(ans + 'this ans for add');

        // if(ans > 0 && start==0){
        //     s = s.substring(0,start) + ans + s.substring(end,s.length);
        //     console.log(s + 'a');
        // }
        if(start == 0 && end == -1){
            s = ans;
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

     // SUBTRACTION
     while(s.indexOf('-') != -1) {
        let i = s.indexOf('-');
        //look for operators in order of / , * , + , -

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
            else if(s[j] == '+' || s[j] == '-'){
                tempB = s.substring(i+1,j);
                end = j;  //not j-1 because last element ignored in substring
                console.log(tempB + "this tempB");
                break;
            }
        }

        ans = +tempA - +tempB;
        console.log(ans + 'this ans for add');

        if(start == 0 && end == -1){
            s = ans;
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




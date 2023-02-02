
let s = '6/2/9/18';
    if(s[s.length-1] == '/' || s[s.length-1] == '*' || s[s.length-1] == '+' || s[s.length-1] == '-'){
        s = s.substring(0, s.length-1);
    }
    console.log(s);


    var tempA = -1;
    var tempB = -1;
    var ans = -1;
    var start = -1;
    var end = -1;
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
        for(let j = i+1; j < s.length; j++){
            if(j == s.length-1){
                tempB = s.substring(j,s.length);
                end = -1;
                console.log(tempB + "this tempB");
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
        if(start == 0){
            s = ans + s.substring(end,s.length);
            console.log(s );
        }
        else if(ans > 0 && end == -1){
            s = s.substring(0,start) + ans;
            console.log(s );
        }
        else if(ans > 0 && start != 0){
            s = s.substring(0,start)  + ans + s.substring(end,s.length);
            console.log(s );
        }
        else{
            s = s.substring(0,start) + ans + s.substring(i,end);
            console.log(s);
        }
        break;
    }

    // while(s.indexOf('*') != -1) {
    //     console.log('mul starts');
    //     console.log(s);
    //     let i = s.indexOf('*');
    //     //look for operators in order of / , * , + , -

    //     // console.log(i);
    //     //look left
    //     for(let j = i-1; j >= 0; j--){
    //         if(j == 0){
    //             tempA = s.substring(0,i);
    //             start = 0;
    //             break;
    //         }
            
    //         else if(s[j] == '*' || s[j] == '+' || s[j] == '-'){
    //             tempA = s.substring(j+1,i);
    //             start = j+1;
    //             break;
    //         }
            
    //     }
        
    //     //look right
    //     for(let j = i+1; j < s.length; j++){
    //         if(j == s.length-1){
    //             tempB = s.substring(j,s.length);
    //             end = -1;
    //             break;
    //         }
    //         else if(s[j] == '*' || s[j] == '+' || s[j] == '-'){
    //             tempB = s.substring(i+1,j);
    //             end = j;  //not j-1 because last element ignored in substring
    //             break;
    //         }
    //     }

    //     ans = +tempA * +tempB;
    //     console.log(ans);

    //     if(start == 0){
    //         s = ans + s.substring(end,s.length);
    //         console.log(s + 'a');
    //     }
    //     else if(ans > 0 && end == -1){
    //         s = s.substring(0,start) + ans;
    //         console.log(s + 'b');
    //     }
    //     else if(ans > 0 && start != 0){
    //         s = s.substring(0,start)  + ans + s.substring(end,s.length);
    //         console.log(s + 'c');
    //     }
    //     // else{
    //     //     s = s.substring(0,start) + ans + s.substring(i,end);
    //     //     console.log(s + 'd');
    //     // }
    // }






    // while(s.indexOf('*') != -1){
    //     let i = s.indexOf('*');

    //     //Mul op

    //         //look left
    //     for(let j = i-1; j >= 0; j--){
    //         if(j == 0){
    //             tempA = s.substring(0,i);
    //             start = 0;
    //             break;
                
    //         }
    //         else if(s[j] == '+' || s[j] == '-'){
    //             tempA = s.substring(j+1,i);
    //             start = j+1+1;
    //             break;
    //         }
            
    //     }
    //     console.log('mul');
    //     console.log(tempA);
            
    //     //look right
    //     for(let j = i+1; j < s.length; j++){
    //         if(j == s.length-1){
    //             tempB = s.substring(j,s.length);
    //             end = s.length-1;
    //             break;
    //         }
    //         else if(s[j] == '*' || s[j] == '+' || s[j] == '-'){
    //             tempB = s.substring(i+1,j);
    //             end = j;  //not j-1 because last element ignored in substring
    //             break;
    //         }
    //     }
    //     console.log(tempB);

    //     ans = +tempA * +tempB;
    //     console.log(ans);
    //     if(ans > 0 && start== 0){
    //         s = ans + s.substring(end,s.length);
    //     }
    //     else if(ans > 0 && start != 0){
    //         s = s.substring(0,start) + '+' + ans + s.substring(end,s.length);
    //     }
    //     else{
    //         s = s.substring(0,start) + '-' + ans + s.substring(i,end);
    //     }
        
    //     console.log(s);
    // }



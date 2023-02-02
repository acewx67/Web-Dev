document.addEventListener("DOMContentLoaded",function(){

    let s = '4/2+1-1*2';
    while(s.length > 0){
        for(let i = 0; i < s.length; i++){
            //look for operators in order of / , * , + , -

            if(s[i] == '/'){
                //look left
                for(let j = i-1; j >= 0; j--){
                    if(j == 0){
                        var tempA = s.substring(0,i);
                        var start = 0;
                        break;
                        
                    }
                    else if(s[j] == '*' || s[j] == '+' || s[j] == '-'){
                        var tempA = s.substring(j+1,i);
                        var start = j+1+1;
                        break;
                    }
                    
                }
                
                //look right
                for(let j = i+1; j < s.length; j++){
                    if(j == s.length-1){
                        var tempB = s.substring(j,s.length);
                        var end = s.length-1;
                        break;
                    }
                    else if(s[j] == '*' || s[j] == '+' || s[j] == '-'){
                        var tempB = s.substring(i+1,j);
                        var end = j;  //not j-1 because last element ignored in substring
                        break;
                    }
                }

                var ans = +tempA / +tempB;
                console.log(ans);
                if(ans > 0){
                    s = s.substring(0,start) + ans + s.substring(end,s.length);
                }
                else{
                    s = s.substring(0,start) + '-' + ans + s.substring(i,end);
                }
                
                console.log(s);
                break;
                
            }
            //Mul op
            if(s[i] == '*'){
                //look left
                for(let j = i-1; j >= 0; j--){
                    if(j == 0){
                        var tempA = s.substring(0,i);
                        var start = 0;
                        break;
                        
                    }
                    else if(s[j] == '+' || s[j] == '-'){
                        var tempA = s.substring(j+1,i);
                        var start = j+1+1;
                        break;
                    }
                    
                }
                
                //look right
                for(let j = i+1; j < s.length; j++){
                    if(j == s.length-1){
                        var tempB = s.substring(j,s.length);
                        var end = s.length-1;
                        break;
                    }
                    else if(s[j] == '*' || s[j] == '+' || s[j] == '-'){
                        var tempB = s.substring(i+1,j);
                        var end = j;  //not j-1 because last element ignored in substring
                        break;
                    }
                }

                var ans = +tempA * +tempB;
                console.log(ans);
                if(ans > 0){
                    s = s.substring(0,start) + ans + s.substring(end,s.length);
                }
                else{
                    s = s.substring(0,start) + '-' + ans + s.substring(i,end);
                }
                
                console.log(s);
                break;
                
            }
            


        }
        // console.log(tempB);
        break;
    }










});
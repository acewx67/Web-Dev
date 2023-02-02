document.addEventListener('DOMContentLoaded',function(){

    let s = "123+123+123/123";
    let add = [];

    {
        let i = 0;
        
        for(;i<s.length;i++){
            add.push(s.indexOf('+',i));
            i = s.indexOf('+');
            i++;
        }
        console.log(add);
    }


    






});
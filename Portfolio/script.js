
const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click',function(e){
    e.preventDefault();
    if(localStorage.getItem('arrayEmail') == null){    //coz we get null if we want to get an item that doesnt exist in localStorage
        var array_email = new Array();
        localStorage.setItem('arrayEmail',JSON.stringify(array_email));
    }

    if(localStorage.getItem('arrayMsg') == null){
        var array_msg = new Array();
        localStorage.setItem('arrayMsg',JSON.stringify(array_msg));
    }
    //Email must be in LowerCase format
    const email = document.querySelector('#email').value.toLowerCase();
    const msg = document.querySelector('#msg').value;

    //only when proper data is given,localStorage should be changed
    // if(email !== "" && msg !== ""){

    //     var temp1 = JSON.parse(localStorage.getItem('arrayEmail'));
    //     temp1.push(email);
    //     localStorage.setItem('arrayEmail',JSON.stringify(temp1));

    //     var temp2 = JSON.parse(localStorage.getItem('arrayMsg'));
    //     temp2.push(msg);
    //     localStorage.setItem('arrayMsg',JSON.stringify(temp2));
    // }
    var regex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10})(.[a-z]{2,10})?$/;
    // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    if(regex.test(email)){
        if(msg != ""){
            var temp1 = JSON.parse(localStorage.getItem('arrayEmail'));
            temp1.push(email);
            localStorage.setItem('arrayEmail',JSON.stringify(temp1));

            var temp2 = JSON.parse(localStorage.getItem('arrayMsg'));
            temp2.push(msg);
            localStorage.setItem('arrayMsg',JSON.stringify(temp2));
        }
        else{
            alert('Please enter a message.');
        }
        
    }
    else{
        alert('Please enter a valid E-mail.');
    }
    
    
});
// if localStorage is empty, create an array
// if not empty push new email data to existing array

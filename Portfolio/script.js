
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

    const email = document.querySelector('#email').value;
    const msg = document.querySelector('#msg').value;

    //only when proper data is given,localStorage should be changed
    if(email !== "" && msg !== ""){

        var temp1 = JSON.parse(localStorage.getItem('arrayEmail'));
        temp1.push(email);
        localStorage.setItem('arrayEmail',JSON.stringify(temp1));

        var temp2 = JSON.parse(localStorage.getItem('arrayMsg'));
        temp2.push(msg);
        localStorage.setItem('arrayMsg',JSON.stringify(temp2));
    }
    
});
// if localStorage is empty, create an array
// if not empty push new email data to existing array

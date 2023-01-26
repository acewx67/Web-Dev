document.addEventListener("DOMContentLoaded",function(){
    
    {   
        if(localStorage.getItem('arrayTask') != null && localStorage.getItem('arrayTaskDesc') != null){
            let temp1 = JSON.parse(localStorage.getItem('arrayTask'));
            let temp2 = JSON.parse(localStorage.getItem('arrayTaskDesc'));
            let taskTable = document.querySelector('.taskTable');
            for(let i = 0; i < temp1.length; i++){
                // create a new row and 3 columns in the task table
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');  
                let td2 = document.createElement('td');  
                let td3 = document.createElement('td');
                td3.innerHTML += '<form><input type="checkbox"></form>';
                let textTd1 = temp1[i];
                td1.innerHTML += textTd1;
                let textTd2 = temp2[i];
                td2.innerHTML += textTd2; 
                
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                taskTable.appendChild(tr);
            }
        }
    }


    








    const submitBtn = document.querySelector('#submitBtn');
    submitBtn.addEventListener('click',function(e){
        e.preventDefault();
        if(localStorage.getItem('arrayTask') == null){    //coz we get null if we want to get an item that doesnt exist in localStorage
            var array_Task = new Array();
            localStorage.setItem('arrayTask',JSON.stringify(array_Task));
        }
    
        if(localStorage.getItem('arrayTaskDesc') == null){
            var array_TaskDesc = new Array();
            localStorage.setItem('arrayTaskDesc',JSON.stringify(array_TaskDesc));
        }
    
        const task = document.querySelector('#task-name').value;
        const taskDesc = document.querySelector('#task-description').value;
    
        //only when proper data is given,localStorage should be changed
        if(task !== "" && taskDesc !== ""){
    
            var temp1 = JSON.parse(localStorage.getItem('arrayTask'));
            temp1.push(task);
            localStorage.setItem('arrayTask',JSON.stringify(temp1));
    
            var temp2 = JSON.parse(localStorage.getItem('arrayTaskDesc'));
            temp2.push(taskDesc);
            localStorage.setItem('arrayTaskDesc',JSON.stringify(temp2));
        } else{
            alert('Please Fill all the details');

        }
    });


    const deleteBtn = document.querySelector('#deleteBtn');

    deleteBtn.addEventListener('click',function(e){
        e.preventDefault();

    })

    




    
});
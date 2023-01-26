document.addEventListener("DOMContentLoaded",function(){
    var uniqueId = 0;
    class Task{
        constructor(taskName,taskDesc){
            this.taskName = taskName;
            this.taskDesc = taskDesc;
            this.checkbox = 0; //default unchecked = 0
        }
        setCheckbox(value){
            this.checkbox = value;
        }

        getCheckbox(value){
            return this.checkbox;
        }

        
    }


    const taskTable = document.querySelector('#taskTable');
    //Loading the previous tasks from the localStorage

    if(localStorage.getItem('taskList') !== null){
        //parse the taskList to array
        let arrayTask = JSON.parse(localStorage.getItem('taskList'));
        if(arrayTask.length > 0){
            uniqueId = arrayTask[arrayTask.length-1].checkbox;

            for(let i = 0; i < arrayTask.length; i++){
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                let td3 = document.createElement('td');
        
                //td3 is for checkbox
        
                td3.innerHTML += '<form><input type="checkbox"></form>';
                td3.classList.add(arrayTask[i].checkbox);
        
                td1.innerHTML += arrayTask[i].taskName;
                td2.innerHTML += arrayTask[i].taskDesc;
        
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                taskTable.appendChild(tr);

            }
        }
        
    }











    //Adding tasks entered by user to the page and to the localStorage

    
    const addTaskBtn = document.querySelector('#submitBtn');

    addTaskBtn.addEventListener('click', function(e){
        e.preventDefault();

        let tempName = document.querySelector('#task-name').value;
        let tempDesc = document.querySelector('#task-description').value;
        console.log(typeof tempName);
        
    
        if(tempName !== "" && tempDesc !== ""){
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
    
            //td3 is for checkbox
            td3.innerHTML += '<form><input type="checkbox"></form>';
            
            uniqueId++;
            td3.classList.add(uniqueId);
            
            
    
            td1.innerHTML += tempName;
            td2.innerHTML += tempDesc;
            // console.log(td1, td2);
    
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            console.log(tr);
            taskTable.appendChild(tr);

            //Adding the data to localStorage
            //if localStorage is empty
            if(localStorage.getItem('taskList') == null){
                //if localStorage is empty, create a new object and store in new list in localStorage

                uniqueId = 1;
                let tempTask = new Task(td1.textContent,td2.textContent);
                tempTask.setCheckbox(uniqueId);
                let taskList = [];
                taskList.push(tempTask);
                localStorage.setItem('taskList',JSON.stringify(taskList));
            }else{
                //if a taskList already exists in localStorage
                let tempTask = new Task(td1.textContent,td2.textContent);
                let taskList = JSON.parse(localStorage.getItem('taskList'));

                tempTask.setCheckbox(uniqueId+1);
                taskList.push(tempTask);
                uniqueId++;
                localStorage.setItem('taskList',JSON.stringify(taskList));
            }

            

            location.reload();

        }else{
            alert('Please enter all details');
        } 

    });

    

    //Removing Completed tasks from the page and localStorage

    const removeTasksBtn = document.querySelector('#deleteBtn');

    removeTasksBtn.addEventListener('click',function(e){
        e.preventDefault();
        //Keeping track of checked boxes
        const checkboxzz = document.querySelectorAll('input[type="checkbox"]'); 

        let arrayList = JSON.parse(localStorage.getItem('taskList'));
        if(arrayList !== null){
            let checkboxes = [];
        checkboxes = checkboxzz;
        // console.log(checkboxes);
        Array.from(checkboxes).forEach(function(checkbox){
            if(checkbox.checked){
                let i = checkbox.parentElement.parentElement.getAttribute('class');
                console.log(i);
                for(let j = 0; j < checkboxes.length; j++){
                    if(arrayList[j].checkbox == i){
                        arrayList.splice(j, 1);
                        break;
                    }
                }
            }
        })
        if(arrayList.length <= 0){
            localStorage.clear();
        }
        else{
            localStorage.setItem('taskList',JSON.stringify(arrayList));
            
        } 
        location.reload();

        }
        else{
            alert('Please add some tasks first.')
        }
        

    });


    





















});
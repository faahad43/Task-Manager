const add = document.getElementById('add');
var taskNo=1;
var tasks;
add.onclick = ()=>{
    const inputVal= document.getElementById('input').value;
    if(inputVal){
        var taskList=document.getElementById('task-list');
        const div = document.createElement('div');
        div.classList.add('task');
        const button = document.createElement('button');
        button.id=taskNo;
        localStorage.setItem(`Task${taskNo}`,inputVal)
        taskNo++;
        button.classList.add('task-btn');
        const paragraph = document.createElement('p');
        paragraph.innerHTML=inputVal;
        div.appendChild(button);
        div.appendChild(paragraph);
        taskList.appendChild(div);
        div.onclick = () =>{
            
            button.innerText?button.innerText='':button.innerText='✔';
            console.log(button.id);
        }
        
    }
    
    document.getElementById('input').value = '';

}

//removing a task from list
const remove = document.getElementById('remove');
remove.onclick = () =>{
    const allTask = document.getElementById('task-list');

    for(let i=0; i<allTask.children.length;i++){
        const removeTask =allTask.children[i].children[0];
        if(removeTask.innerHTML){
            allTask.children[i].remove();
            localStorage.removeItem(`Task${removeTask.id}`);
            i--;
        }
    }
    
}

//Updating the Data
var update = document.getElementById('update');
var updateTask;
update.onclick = () =>{
    if(update.innerHTML != 'Done'){
        updateTask = [];
        const allTask = document.getElementById('task-list');
        for(let i=0; i<allTask.children.length;i++){
            const task = allTask.children[i].children[0];
            if(task.innerHTML){
                updateTask.push(allTask.children[i]);
            }
        }
        if(updateTask.length > 1){
            console.log('can\'t update two value');
            alert('can\'t update two value');
        }else if(updateTask.length === 1){
            console.log(updateTask[0]);
            document.getElementById('input').value=updateTask[0].children[1].innerHTML;
            update.innerHTML = 'Done';
            // localStorage.getItem(`Task${updateTask[0]}`)
        }
    }else{
        updateTask[0].children[0].innerHTML = '';
        updateTask[0].children[1].innerHTML= document.getElementById('input').value;
        console.log(updateTask[0],'onga');
        document.getElementById('input').value = '';
        update.innerHTML = 'Update';
        
    }
    
}

//Clearing Up All the data
const clear = document.getElementById('clear');
clear.onclick = () => {
    const node = document.getElementById('task-list');
    node.innerHTML=''
    localStorage.clear();
    taskNo=1;
}

//Fetching Data after Page is Load
window.onload = ()=>{
    const allData = [];
    const keys = Object.keys(localStorage);
    keys.sort((a, b) => {
        // Extract the numeric part from each string
        let numA = parseInt(a.substring(4));
        let numB = parseInt(b.substring(4));
    
        // Compare the numeric parts
        return numA - numB;
    });
    console.log(keys,'sorted aray');
    for(let i=0; i<keys.length; i++){
        allData.push(localStorage.getItem(keys[i]));
    }
    console.log(allData);
    var taskList=document.getElementById('task-list');
    console.log(keys.length);
    for( let i=0 ; i<keys.length ; i++){
        const div = document.createElement('div');
        div.classList.add('task');
        const button = document.createElement('button');
        console.log('hello');
        console.log(keys[i]);
        button.id=keys[i][4];
        button.classList.add('task-btn');
        const paragraph = document.createElement('p');
        paragraph.innerHTML=allData[i];
        div.appendChild(button);
        div.appendChild(paragraph);
        taskList.appendChild(div);
        div.onclick = () =>{
            
            button.innerText?button.innerText='':button.innerText='✔';
            console.log(button.id);
        }
    }
}



const toggleBtn = document.querySelector('.mode-toggle');
const windowElement = document.querySelector('.window');

toggleBtn.addEventListener('click', () => {
    windowElement.classList.toggle('dark-mode');
});


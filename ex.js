function displayList(){
    let task = document.createElement('li');
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";   
    tasks.forEach((element) => { 
        task.innerHTML = 
        
        `<li> <div class="container-li"><input type="text" name="" id="task" style="border: none" value="${element}" disabled="true">          
            <div class="container-li-sec">
                <input type="checkbox" name="" id="">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"></button>
                    <ul class="dropdown-menu">
                    <li id="dropdown-edit"><a class="dropdown-item">Edit</a></li>
                    <li id="dropdown-delete"><a class="dropdown-item">Delete</a></li>
                    </ul>
                </div>
            </div>
        </li>`

        toDoList.prepend(task);
    })
    
}

function creatNodes(){
    let checkbox = document.querySelector('input[type="checkbox"]');
    let dropdownEdit = document.querySelector('#dropdown-edit');
    let dropdownDelete = document.querySelector('#dropdown-delete');
    checkbox.addEventListener('change', onCheck);
    dropdownDelete.addEventListener('click',deleteTask);
    dropdownEdit.addEventListener('click', editTask );
   
}

function editTask(e){
    let targetToEdit = e.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling;
    targetToEdit.removeAttribute("disabled");
    targetToEdit.addEventListener('keypress', isEnter)
}

function isEnter(e){
    if(e.keyCode == 13){
        e.target.setAttribute("disabled","disables");
    }
}

function deleteTask(e){
    targetLi = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    toDoList.removeChild(targetLi);
}

function onClick(){
    // let userInput = e.target.previousElementSibling;
    if(userInput.value != ''){
        tasks.push(userInput.value);
        displayList();
        userInput.value = ''
        creatNodes();
    }
}

function onCheck(e){
    let text = e.target.parentElement.previousElementSibling;
    let container = e.target.parentElement.parentElement;
    if(this.checked){
        text.classList.add('color-green');
        container.classList.add('border-green');
    }else{
        text.classList.remove('color-green');
        container.classList.remove('border-green');
    }
    
}

function addUserInput(e){
    if(e.keyCode == 13){
        onClick();
    }
}

const tasks = [];
let toDoList = document.querySelector('#list');
let btn = document.querySelector('input[type="submit"]');
let userInput = document.querySelector('input[type="text"]');
btn.addEventListener('click', onClick);
userInput.addEventListener('keypress',addUserInput)


// let d = document.querySelector('body');
// d.addEventListener('keypress', function (e) {console.log(e)});










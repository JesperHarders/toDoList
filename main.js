let ulToDo = document.querySelector('#to_Do_List');
let inputToDo = document.querySelector('#input_Item');
let inputButton = document.querySelector('#add_To_Do_Button');

inputButton.addEventListener("click", addToDo);
ulToDo.addEventListener("click", deleteCheck);

function addToDo(event) {
    event.preventDefault();

    let todoDiv = document.createElement('li');
    todoDiv.classList.add('to_do_item');
    todoDiv.innerText = inputToDo.value;
    
    if(inputToDo.value === ""){
        return null;
    }
    
    let completedBotton = document.createElement('button');
    completedBotton.innerHTML = '<i class="fas fa-check"></i>';
    completedBotton.classList.add('complete_btn');
    todoDiv.appendChild(completedBotton);
    
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete_btn');
    todoDiv.appendChild(deleteButton);
    
    ulToDo.appendChild(todoDiv);
    
    inputToDo.value = "";
}

let add = document.querySelector('#add_To_Do_Button');
let decrease = document.querySelector('.delete_btn');
let int = document.querySelector('#counter');
let integer = 0;

add.addEventListener('click', function(){
    integer += 1;
    int.innerHTML = integer; 
})

function deleteCheck(e) {
    let item = e.target;
    
    if(item.classList[0] === "delete_btn") {
        let todo = item.parentElement; 
        
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }
    
    if(item.classList[0] === "complete_btn") {
        let todo = item.parentElement;
        todo.classList.toggle("completedItem");
    }
}


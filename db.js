let ulToDo = document.querySelector('#to_Do_List');
let inputToDo = document.querySelector('#input_Item');
let inputButton = document.querySelector('#add_To_Do_Button');

inputButton.addEventListener("click", addToDo);
ulToDo.addEventListener("click", deleteCheck);

function addToDo(event) {
    event.preventDefault();

    let todoDiv = document.createElement('div');
    todoDiv.classList.add('to_do_item');

    let newItem = document.createElement('li');
    newItem.innerText = inputToDo.value;
    todoDiv.appendChild(newItem);
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
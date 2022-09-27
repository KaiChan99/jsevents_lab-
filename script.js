
const enterBtn = document.getElementById("enter");
const input = document.getElementById("new-todo");
const list = document.querySelector("#list");

enterBtn.addEventListener('click', ()=>{
    let listItem = document.createElement('li'); //create list item
    listItem.innerText = input.value; //set list item equal to inputted text
    list.appendChild(listItem); //add this to the list 
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    document.body.appendChild(deleteBtn);
    deleteBtn.onclick = function (){
        list.removeChild(listItem);
        document.body.removeChild(deleteBtn);
    }
})

const dateBtn = document.getElementById("date");

dateBtn.addEventListener('click', ()=>{
    const dateDisplay = document.getElementById("dateDisplay");
    dateDisplay.innerText = Date();
})


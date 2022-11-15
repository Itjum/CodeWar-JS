//get elements
let textbox = document.getElementById("textBox");
let addbutton = document.getElementById("addButton");
let list = document.getElementById("todoList");

function get_value()
{
    let input = textbox.value;
    return input;
}

addbutton.addEventListener("click", ()=>{
    let value = get_value();
    if (value !== "")
    {
        let todo = document.createElement('li');
        let span = document.createElement("span");
        todo.className = "todoItem";
        span.className = "todoText";
        span.innerHTML = value;
        let btn = document.createElement("button");
        btn.innerHTML = "Delete";
        btn.name = "Delete";
        todo.appendChild(span);
        todo.appendChild(btn);
        list.appendChild(todo);
        btn.onclick = function () {
            list.removeChild(todo);
        };
    }
    textbox.value = "";
});

delbutton.addEventListener()
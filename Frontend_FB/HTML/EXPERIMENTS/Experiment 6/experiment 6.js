// Tasl 1 ====>

function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}
const c = counter();
console.log(c());
console.log(c()); 
console.log(c()); 


// Task 2===>

function addItem() {
    const input = document.getElementById("todoInput");
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(delBtn);

    document.getElementById("todoList").appendChild(li);

    input.value = "";
}

let box_text = document.getElementById("task_text");
let box_level = document.getElementById("level_task");
let btn_save = document.getElementById("btn_save");
let list_items = document.getElementById("all_items");

btn_save.addEventListener("click", function () {
    let val = box_text.value.trim();
    let lvl = box_level.value;

    if (val === "") return;

    let li = document.createElement("li");
    li.classList.add("item_box");

    if (lvl === "high") li.style.backgroundColor = "#ff9999";
    if (lvl === "mid") li.style.backgroundColor = "#ffe08a";
    if (lvl === "low") li.style.backgroundColor = "#a0e7a0";

    let txt = document.createElement("span");
    txt.textContent = val;

    let btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnEdit.classList.add("btn_edit");
    btnEdit.onclick = function () {
        let newT = prompt("Change:", txt.textContent);
        if (newT) txt.textContent = newT;
    };

    let btnDone = document.createElement("button");
    btnDone.textContent = "Done";
    btnDone.classList.add("btn_done");
    btnDone.onclick = function () {
        txt.classList.add("done_mark");
    };

    li.appendChild(txt);
    li.appendChild(btnEdit);
    li.appendChild(btnDone);
    list_items.appendChild(li);

    box_text.value = "";
});

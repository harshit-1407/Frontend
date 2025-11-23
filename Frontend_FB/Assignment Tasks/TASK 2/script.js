let box = document.getElementById("text_box");
let show_left = document.getElementById("char_left");
let max_len = 100;

box.addEventListener("input", function () {
    let data = box.value;

    if (data.length > max_len) {
        box.value = data.slice(0, max_len);
    }

    let left = max_len - box.value.length;
    show_left.textContent = "Characters left: " + left;

    if (left > 50) {
        show_left.style.color = "green";
    } else if (left > 20) {
        show_left.style.color = "orange";
    } else {
        show_left.style.color = "red";
    }
});

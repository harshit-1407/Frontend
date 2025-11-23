var items = [
{ name: "Bluetooth Speaker", type: "electronics" },
    { name: "Gaming Keyboard", type: "electronics" },
    { name: "Digital Watch", type: "electronics" },
    { name: "Hoodie", type: "clothing" },
    { name: "Cargo Pants", type: "clothing" },
    { name: "Sports Cap", type: "Clothing" },
    { name: "Keychain Metal", type: "accessories" },
    { name: "Backpack", type: "accessories" },
    { name: "Wallet", type: "accessories" },
    { name: "Wireless Earbuds", type: "electronics" }
];
var listBox = document.getElementById("show_list");
var searchBox = document.getElementById("box_search");
var buttonAll = document.querySelectorAll(".btn_filter");

function showList(arr) {
    listBox.innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
        var li = document.createElement("li");
        li.textContent = arr[i].name + " - " + arr[i].type;
        listBox.appendChild(li);
    }
}

showList(items);

for (var b = 0; b < buttonAll.length; b++) {
    buttonAll[b].onclick = function () {
        var cat = this.getAttribute("data-type");
        
        if (cat === "all") {
            showList(items);
        } else {
            var temp = [];
            for (var i = 0; i < items.length; i++) {
                if (items[i].type === cat) {
                    temp.push(items[i]);
                }
            }
            showList(temp);
        }
    };
}

searchBox.oninput = function () {
    var txt = searchBox.value.toLowerCase();
    var tempList = [];

    for (var i = 0; i < items.length; i++) {
        var small = items[i].name.toLowerCase();
        if (small.indexOf(txt) !== -1) {
            tempList.push(items[i]);
        }
    }
    showList(tempList);
};

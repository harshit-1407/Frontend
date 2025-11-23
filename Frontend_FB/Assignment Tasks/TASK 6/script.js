var tableBox = document.getElementById("userTable");
var btnReload = document.getElementById("refreshBtn");
var loadMsg = document.getElementById("loader");

async function loadUsers() {
    loadMsg.style.display = "block";
    tableBox.innerHTML = "";

    try {
        var response = await fetch("https://jsonplaceholder.typicode.com/users");
        var users = await response.json();

        for (var i = 0; i < users.length; i++) {
            var row = "<tr>" +
                        "<td>" + users[i].name + "</td>" +
                        "<td>" + users[i].email + "</td>" +
                        "<td>" + users[i].address.city + "</td>" +
                      "</tr>";
            tableBox.innerHTML += row;
        }

    } catch (e) {
        alert("Error fetching user data!");
    }

    loadMsg.style.display = "none";
}

btnReload.onclick = loadUsers;
loadUsers();

let username;

document.getElementById("name_submit").onclick = function() {
    username = document.getElementById("user_name").value;

    document.getElementById("myH1").textContent = `Hello ${username}`;
};
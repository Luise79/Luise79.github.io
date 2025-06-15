document.getElementById("login").addEventListener("click", function() {
    console.log("deu");
    document.getElementById("loginTab").style.display = "block";
});

document.getElementById("closetab").addEventListener("click", function() {
    document.getElementById("loginTab").style.display = "none";
});
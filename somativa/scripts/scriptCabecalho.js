document.getElementById("login").addEventListener("click", function() {
    document.getElementById("loginTab").style.display = "block";
});

document.getElementById("closetab").addEventListener("click", function() {
    document.getElementById("loginTab").style.display = "none";
});

document.getElementById("buttonLogin").addEventListener("click", function() {
    document.getElementById("loginTab").style.background-color = "red";
    console.log("deu");
    alert("Não é possível fazer o login no momento. Por favor, volte mais tarde!");
})
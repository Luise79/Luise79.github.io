document.getElementById("login").addEventListener("click", function() {
    location.replace("login.html");
});

document.getElementById("loginX").addEventListener("click", function() {
    location.replace("index.html");
});

// so esse elemento da null
document.getElementById("formRecomendadosX").addEventListener("click", function() {
    location.replace("index.html");
});

document.getElementById("buttonLogin").addEventListener("click", function() {
    alert("Não é possível fazer o login no momento. Por favor, volte mais tarde!");
});

document.getElementById("buttonRecomendados").addEventListener("click", function() {
    console.log(1);
    
});
/* Quando envio o formulario e aperto o botao da pagina pra voltar o quadrado selecionado anteriormente
 permanece pintado porem sem estar realmente selecionado, 
 logo se recarregar a pagina ele volta ao normal e evita confusao se está selecionado ou nao */
var perfEntries = performance.getEntriesByType("navigation");
if (perfEntries[0].type === "back_forward") {
    location.reload();
}

document.getElementById("formRecomendadosX").addEventListener("click", () => {
    console.log("entrou");
    location.replace("index.html");
});

const checkboxRecomendados = document.querySelectorAll(".containerCheckbox");
for (var i = 0; checkboxRecomendados.length > i; i++) {
    let justOnce = true;

    checkboxRecomendados[i].addEventListener("click", function() {
        if (justOnce) {
            justOnce = false;
        } else {
            justOnce = true;
            return;
        }

        this.ariaChecked = this.ariaChecked == "true" ? "false" : "true";
    });
}

function validateForm() {
    const qs = document.getElementsByClassName("questions");
    let answeredqs = [];
    for (let q of qs) {
        let qAnswered = false;
        for (let label of q.getElementsByTagName("label")) {

            if (label.ariaChecked == "true") {
                answeredqs.push(label.getAttribute("value"));
                qAnswered = true;
            }
        }
        if (!qAnswered) {
            alert("Por favor, selecione alguma resposta!");
            return false;
        }
        console.log(answeredqs);
    }

    localStorage.setItem("answersForm", answeredqs);
    findRecomendados(answeredqs);
}

document.getElementById("formRecomendados").addEventListener("submit", validateForm);

function findRecomendados(formValues) {
    for (let formValue of formValues) {
        //console.log(formValue);
    }
}

/*
function getBooks() {
    var romances = localStorage.getItem("livrosRomance");
    var terrores = localStorage.getItem("livrosTerror");
    var acaos = localStorage.getItem("livrosAcao");
    var filosofias = localStorage.getItem("livrosFilosofia");
    const livros = localStorage.getItem("todosLivros");
    console.log(livros[0]);

    for (let l of livros) {
        console.log(l);
    }

    //console.log(romances);
    for (let i = 0; i > livros.length; i++) {
        let livro = livros[i];
        console.log(livro);
        let classes = livro.getAttribute("class").split(" ");
        console.log(classes)
    }
    console.log(5678);
}

getBooks();
// document.getElementById('romance').getElementsByClassName("livro")[0].getAttribute("class")

*/
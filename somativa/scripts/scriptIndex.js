totGeneros = ["romance", "terror", "acao", "filosofia"]

const answersForm = localStorage.getItem("answersForm").split(",");
const livros = document.querySelectorAll(".livro");
const divRecomendados = document.getElementById("recomendados");


// Insere os livros com os generos escolhidos pelo usuario na aba de recomendados
function insertLivrosRecomendados() {
    const generosEscolhidos = checkIsGenero(answersForm);

    for (let livro of livros) {
        let classes = livro.getAttribute("class").split(" ");
        let generoLivroCatalogo = checkIsGenero(classes);

        for (let generoEscolhido of generosEscolhidos) {
            if (generoLivroCatalogo[0] === generoEscolhido) {
                let copiaLivro = livro.cloneNode(true);
                divRecomendados.appendChild(copiaLivro);
            }    
        }
    }

    if (divRecomendados.querySelectorAll(".livro").length > 1) {
        console.log(11, divRecomendados, divRecomendados.querySelectorAll(".livro").length);
        document.getElementById("changePage").style.display = "none";
        divRecomendados.style.height = "300px";
    }
}

// Deleta o que nao for genero de livro na resposta do usuario dada pelo formulario
function checkIsGenero(listGeneros) {
    let newlist = [];
    for (let i = 0; listGeneros.length >= i; i++) {
        for (let genero of totGeneros) {
            if (genero === listGeneros[i]) {
                newlist.push(genero);
                break;
            }
        }
    }
    return newlist;
}

function deleteLivrosRecomendados() {
    document.getElementById("buttonRecomendados").style.display = "block";
    divRecomendados.style.height = "150px";
    localStorage.removeItem("answersForm");

    for (let livro of divRecomendados.querySelectorAll(".livro")) {
        divRecomendados.removeChild(livro);
    }
}


insertLivrosRecomendados();

//deleteLivrosRecomendados();
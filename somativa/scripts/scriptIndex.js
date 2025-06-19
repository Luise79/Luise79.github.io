totGeneros = ["romance", "terror", "acao", "filosofia"]

const answersForm = localStorage.getItem("answersForm").split(",");
console.log(answersForm);

const generosRecomendados = checkIsGenero(answersForm);
const livros = document.querySelectorAll(".livro");
const divRecomendados = document.getElementById("recomendados");

for (let livro of livros) {
    console.log(livro);
    let classes = livro.getAttribute("class").split(" ");
    let generos = checkIsGenero(classes);
    console.log("livr", generos, "rec", generosRecomendados);

    for (let g of generos) {
        console.log(g);

        for (let answer of answersForm) {
            console.log(answer);
            if (answer == g) {
                let newLivro = livro.cloneNode(true);
                divRecomendados.appendChild(newLivro);
            }
        }
    }
}


function checkIsGenero(listGeneros) {
    let f = 0;
    for (let i = 0; listGeneros.length >= i; i++) {
        if (!totGeneros.includes(listGeneros[f])) {
            listGeneros.splice(f, 1);
            console.log(listGeneros);
        } else {
            f++;
        }
    }
    return listGeneros;
}

/*
localStorage.setItem('livrosRomance', document.getElementById('romance').innerHTML);

localStorage.setItem('livrosTerror', document.getElementById('terror').innerHTML);

localStorage.setItem('livrosAcao', document.getElementById('acao').innerHTML);

localStorage.setItem('livrosFilosofia', document.getElementById('filosofia').innerHTML);

localStorage.setItem('todosLivros', document.querySelectorAll(".livro"));

const livros3 = localStorage.getItem('todosLivros');
const livros = Array.from(document.querySelectorAll(".livro"));
const livros2 = document.querySelectorAll(".livro");

console.log(livros);
console.log(livros2);
console.log(livros3);

livros.forEach(livro => console.log(livro));

*/
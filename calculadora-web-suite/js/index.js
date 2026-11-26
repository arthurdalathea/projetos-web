const menu = document.querySelector("#menu-lateral");
const overlay = document.querySelector("#overlay");

const body = document.querySelector("body");

const botaoAbrir = document.querySelector("#botao-abrir-menu");
const botaoFechar = document.querySelector("#botao-fechar-menu");
const botaoTema = document.querySelector("#botao-tema");

const logoTemaClaro = document.querySelector('#logo-tema-claro');
const logoTemaEscuro = document.querySelector('#logo-tema-escuro');
const logoPequenaTemaClaro = document.querySelector('#logo-pequena-tema-claro');
const logoPequenaTemaEscuro = document.querySelector("#logo-pequena-tema-escuro");
const iconeSol = document.querySelector('#icone-sol');
const iconeLua = document.querySelector('#icone-lua');


function abrirMenu() {
    menu.classList.add("aberto");
    overlay.classList.add("ativo");
}

function fecharMenu() {
    menu.classList.remove("aberto");
    overlay.classList.remove("ativo");
}

function alterarTema() {
    const éTemaEscuro = document.body.classList.toggle("dark");

    if (éTemaEscuro) {
        iconeSol.classList.add("desaparecer");
        logoPequenaTemaClaro.classList.add("desaparecer");
        logoTemaClaro.classList.add('desaparecer');
        logoTemaEscuro.classList.remove('desaparecer');
        iconeLua.classList.remove("desaparecer");
        logoPequenaTemaEscuro.classList.remove("desaparecer");

    } else {
        iconeSol.classList.remove("desaparecer");
        logoPequenaTemaClaro.classList.remove("desaparecer");
        logoTemaClaro.classList.remove('desaparecer');
        logoTemaEscuro.classList.add('desaparecer');
        iconeLua.classList.add("desaparecer");
        logoPequenaTemaEscuro.classList.add("desaparecer");
    }


}

botaoAbrir.addEventListener("click", abrirMenu);
botaoFechar.addEventListener("click", fecharMenu);
overlay.addEventListener("click", fecharMenu);
botaoTema.addEventListener("click", alterarTema);

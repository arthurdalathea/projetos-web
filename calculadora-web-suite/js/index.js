const menu = document.querySelector("#menu-lateral");
const overlay = document.querySelector("#overlay");

const botaoAbrir = document.querySelector("#botao-abrir-menu");
const botaoFechar = document.querySelector("#botao-fechar-menu");

function abrirMenu() {
    menu.classList.add("aberto");
    overlay.classList.add("ativo");
}

function fecharMenu() {
    menu.classList.remove("aberto");
    overlay.classList.remove("ativo");
}

botaoAbrir.addEventListener("click", abrirMenu);
botaoFechar.addEventListener("click", fecharMenu);
overlay.addEventListener("click", fecharMenu);
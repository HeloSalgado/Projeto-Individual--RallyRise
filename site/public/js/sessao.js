// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var idUsuario = sessionStorage.ID_USUARIO;

    var usuario_nome = document.getElementById("usuario_nome");

    if (email != null && nome != null && idUsuario != null) {
        usuario_nome.innerHTML = nome;
        perfil.style.display = "flex";
        link_login.style.display = "none";
        cadastro.style.display = "none";
    } else {
        window.location = "../login.html";
    }
}

function validarSessaoIndex() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var idUsuario = sessionStorage.ID_USUARIO;


    var usuario_nome = document.getElementById("usuario_nome");

    if (email != null && nome != null && idUsuario != null) {
        usuario_nome.innerHTML = nome;
        perfil.style.display = "flex";
        link_login.style.display = "none";
        cadastro.style.display = "none";
    } else {
        perfil.style.display = "none";
        link_login.style.display = "flex";
        cadastro.style.display = "flex";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}


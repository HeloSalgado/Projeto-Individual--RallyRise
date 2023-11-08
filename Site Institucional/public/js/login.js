var listaNome = [];
var listaEmail = [];
var listaSenha = [];
var listaConfirmarSenha = [];

function entrarNaConta() {
    var nome = nome_usuario.value;
    var email = email_usuario.value;
    var senha = senha_usuario.value;
    var confirmarSenha = confirmacao_senha.value;


    if (nome != '' || email != '' || senha != '' || confirmarSenha != '') {
        if (email.indexOf('@') > 0 && email.indexOf('.com') > 0) {
            if (email.indexOf('gmail') > 0 || email.indexOf('hotmail') > 0 || email.indexOf('outlook') > 0) {
                if (senha.length >= 8 && confirmarSenha == senha) {
                    listaNome.push(nome);
                    listaEmail.push(email);
                    listaSenha.push(senha);
                    listaConfirmarSenha.push(confirmarSenha);
                    alert('Bem vindo(a)!')
                    window.open('index.html');
                } else {
                    alert('Senha com menos de 8 caracteres ou senhas diferentes!')
                }
            } else {
                alert('E-mail deve conter "gmail", "hotmail" ou "outlook"')
            }
        } else {
            alert('E-mail deve conter "@" e ".com"');
        }
    } else {
        alert('Todos os campos precisam ser preenchidos')
    }

}

function senha() {
    var senha = senha_usuario.value;

    if (senha.length < 1) {
        senha_usuario.style.borderBottom = '';
        msg_criterios.innerHTML = ''
    } else if (senha.length >= 1 && senha.length < 8) {
        senha_usuario.style.borderBottom = '4px solid red'
        msg_criterios.innerHTML = '<img id="verificado" src="../assets/imgs/cadastro-login/verificado-vermelho.png"> 8 caracteres'
    } else {
        senha_usuario.style.borderBottom = '4px solid green'
        msg_criterios.innerHTML = '<img id="verificado" src="../assets/imgs/cadastro-login/verificado-verde.png"> 8 caracteres'
    }
}

function confirmarSenha() {
    var confirmarSenha = confirmacao_senha.value;
    var senha = senha_usuario.value;

    if (confirmarSenha.length < 1) {
        confirmacao_senha.style.borderBottom = '';
        msg_criterios2.innerHTML = ''
    } else if (confirmarSenha.length >= 1 && confirmarSenha.length < 8) {
        msg_criterios2.innerHTML = '<img id="verificado" src="../assets/imgs/cadastro-login/verificado-vermelho.png"> 8 caracteres &nbsp;'
        if (confirmarSenha != senha) {
            confirmacao_senha.style.borderBottom = '4px solid red'
            msg_criterios2.innerHTML += '<img id="verificado" src="../assets/imgs/cadastro-login/verificado-vermelho.png"> Senha igual'
        }
    } else {
        msg_criterios2.innerHTML = '<img id="verificado" src="../assets/imgs/cadastro-login/verificado-verde.png"> 8 caracteres &nbsp;'
        if (confirmarSenha == senha) {
            confirmacao_senha.style.borderBottom = '4px solid green'
            msg_criterios2.innerHTML += '<img id="verificado" src="../assets/imgs/cadastro-login/verificado-verde.png"> Senha igual'
        } else {
            confirmacao_senha.style.borderBottom = '4px solid red'
            msg_criterios2.innerHTML += '<img id="verificado" src="../assets/imgs/cadastro-login/verificado-vermelho.png"> Senha igual'
        }
    }
}


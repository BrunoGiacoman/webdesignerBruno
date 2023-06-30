function Validar() {

    var nome = window.document.getElementById("nome").value
    var email = window.document.getElementById("email").value
    var msg = window.document.getElementById("msg").value

    //Validacao dos campos (se foram preenchidos)
    if (nome == "") {
        alert("Por favor, digite seu nome!")
        return false;
    }
    if (email == "") {
        alert("Por favor, digite seu email!")
        return false;
    }
    if (msg == "") {
        alert("Por favor, digite uma mensagem!")
        return false;// impede o envio do formulario
    }
    //Gravar os cookies codificados
    document.cookie = `nome= ${encodeURIComponent(nome)}`;
    document.cookie = `email= ${encodeURIComponent(email)}`;
    document.cookie = `msg= ${encodeURIComponent(msg)}`;


    return true;[]
}
document.getElementById("botao").addEventListener("click", function (e) {
    var nome = document.getElementById("nome").value;
    
    if (nome.length <3 ||  !isNaN(nome)) {
        /* Tem erro - preventDefault() vai cancelar a ação de submit - ele previne o acontecimento do event submit*/
        e.preventDefault();
        document.getElementById("nome").style.backgroundColor = "red";
    }
    else {
        document.getElementById("nome").style.backgroundColor = "white";
    }

    // fim da validação do nome

    // valiando o email
    var email=document.getElementById("email").value
    // o campo e-mail precisa de conter :"@" "," "." e não pode estar vazio
    if(email.indexOf("@") == -1 || email.indexOf(".") == -1 || email.length == "" ) {

        e.preventDefault()
        document.getElementById("email").style.borderColor = "red"
    }
    else {

        document.getElementById("email").style.borderColor = "green"
    }

});
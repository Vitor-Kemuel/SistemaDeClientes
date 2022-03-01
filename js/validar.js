function validar(){
    var name = formCadastro.name.value;
    var birthDate = formCadastro.birthDate.value;
    var cpf = formCadastro.cpf.value;
    var phoneNumber = formCadastro.phoneNumber.value;
    var email = formCadastro.email.value;
    var address = formCadastro.address.value;
    // var comments = formCadastro.comments.value;
    // alert(birthDate)

    //------------------
    // validando nome
    //------------------

    //verificando se o nome está vázio
    
    //tirando espaços da string, para caso o usuário tenha digitado apenas espaço
    var nameValida = name.replace(/ /g, '')
    if (nameValida == ""){
        alert("Nome não pode estar vazio");
        formCadastro.name.focus();
        return false;
    }
    
    //verificando se existe caracteres especiais
    
    const caracteresEspecias = /\W|_/;
    if (caracteresEspecias.test(name)){
        alert("Nome não pode conter caracteres especiais");
        formCadastro.name.focus();
        return false;
    }


    //verificando se o nome está vázio
    if (birthDate == ""){
        alert("É necessario digitar a data de nascimento completa \nEx. 10/05/2002");
        formCadastro.birthDate.focus();
        return false;
    }
}
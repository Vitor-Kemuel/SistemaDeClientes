function validarCPF(cpf) {	
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}

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
        alert("O campo nome não pode estar vazio");
        formCadastro.name.focus();
        return false;
    }
    
    //verificando se existe caracteres especiais
    
    const regexName = /\W|_/;
    if (regexName.test(name)){
        alert("Nome não pode conter caracteres especiais");
        formCadastro.name.focus();
        return false;
    }


    //------------------
    // validando DN
    //------------------
    if (birthDate == ""){
        alert("É necessario digitar a data de nascimento completa \nEx. 10/05/2002");
        formCadastro.birthDate.focus();
        return false;
    }
    
    //------------------
    // validando CPF
    //------------------
    if(validarCPF(cpf) == false){
        alert("CPF informado é invalido")
        formCadastro.cpf.focus();
        return false;
    }

    //------------------
    // validando numero de telefone
    //------------------
    var phoneNumberValida = phoneNumber.replace(/ /g, '')
    if (phoneNumberValida == ""){
        alert("O campo celular não pode estar vazio");
        formCadastro.phoneNumber.focus();
        return false;
    }

    //------------------
    // validando E-mail
    //------------------
    const regexEmail = /\S+@\S+\.\S+/;
    if (regexEmail.test(email) == false){
        alert("E-mail é invalido");
        formCadastro.email.focus();
        return false;
    }
}
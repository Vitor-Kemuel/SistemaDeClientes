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

function validar(acao){
    console.log(acao)
    if(acao == 'cadastro'){
        var form = formCadastro;
    }else if (acao == 'atualizar'){
        var form = formUpdate;
    }
    var name = form.name.value;
    var birthDate = form.birthDate.value;
    var cpf = form.cpf.value;
    var phoneNumber = form.phoneNumber.value;
    var email = form.email.value;
    var address = form.address.value;
    var comments = form.comments.value;
        
    //------------------
    // validando nome
    //------------------
    //tirando espaços da string, para caso o usuário tenha digitado apenas espaço
    var nameValida = name.replace(/ /g, '')
    //verificando se o nome está vázio
    if (nameValida == ""){
        alert("O campo nome não pode estar vazio");
        form.name.focus();
        return false;
    }
    
    //Criando um regex com caracteres especiais + _
    const regexName = /\W|_/;
    //removendo acentos do nome
    nameValida = nameValida.replace(/[áàãâäÁÀÃÂÄ]/g, 'a');
    nameValida = nameValida.replace(/[éèêëÉÈÊË]/g, 'e');
    nameValida = nameValida.replace(/[íìîïÍÌÎÏ]/g, 'i');
    nameValida = nameValida.replace(/[óòõôöÓÒÕÔÖ]/g, 'o');
    nameValida = nameValida.replace(/[úùûüÚÙÛÜ]/g, 'u');
    nameValida = nameValida.replace(/[çÇ]/g, 'c');
    //verificando se existe caracteres especiais
    if (regexName.test(nameValida)){
        alert("Nome não pode conter caracteres especiais");
        form.name.focus();
        return false;
    }


    //------------------
    // validando DN
    //------------------
    if (birthDate == ""){
        alert("É necessario digitar a data de nascimento completa \nEx. 10/05/2002");
        form.birthDate.focus();
        return false;
    }
    
    //------------------
    // validando CPF
    //------------------
    if(validarCPF(cpf) == false){
        alert("CPF informado é invalido")
        form.cpf.focus();
        return false;
    }

    //------------------
    // validando numero de telefone
    //------------------
    var phoneNumberValida = phoneNumber.replace(/ /g, '')
    if (phoneNumberValida == ""){
        alert("O campo celular não pode estar vazio");
        form.phoneNumber.focus();
        return false;
    }

    //------------------
    // validando E-mail
    //------------------
    const regexEmail = /\S+@\S+\.\S+/;
    if (regexEmail.test(email) == false){
        alert("E-mail é invalido");
        form.email.focus();
        return false;
    }

    //------------------
    // validando endereço
    //------------------
    var addressValida = address.replace(/ /g, '')
    if (addressValida == ""){
        alert("O campo endereço não pode estar vazio");
        form.address.focus();
        return false;
    }

    //------------------
    // validando observações
    //------------------
    if (comments.length > 299){
        alert("As observações só podem conter até 300 caracteres");
        form.comments.focus();
        return false;  
    }

    //------------------
    // Retornando valor para caso os dados estejam certos
    //------------------
    return true;
}
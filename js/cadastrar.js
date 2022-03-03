// Criando a ação de click no elemento
$('#cadastrar').on('click', function(){
    //chamando a função de validação dos dados
    if(validar('cadastro')){    
        // recuperando dados do formulario
        var dados = $('#formCadastro').serialize();
        // enviando dados para o servidor
        $.ajax({
            url: 'services/cadastro.php',
            type: 'POST',
            data: dados,
            processData: false,
            contetType: false,
            beforeSend: function(){
                $("#resposta").html("Enviando...");
            },
            // recebendo resposta do servidor
            success: function(resposta){
                console.log(resposta)
            },
            //finalizando
        }).done(function(e){
            $("#resposta").html(e);
            if(e == "Cadastrado com sucesso")
            $('#formCadastro').each(function(){
                this.reset();
            })
        })
    }  
})
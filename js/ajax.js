$('#cadastrar').on('click', function(){
    
    if(validar()){    
        var dados = $('#formCadastro').serialize();
        
        $.ajax({
            url: 'script.php',
            type: 'POST',
            data: dados,
            processData: false,
            contetType: false,
            beforeSend: function(){
                $("#resposta").html("Enviando...");
            },
            success: function(resposta){
                console.log(resposta)
            },
        }).done(function(e){
            $("#resposta").html(e);
            if(e == "Cadastrado com sucesso")
            $('#formCadastro').each(function(){
                this.reset();
            })
        })
    }  
})
$('#atualizar').on('click', function(){
    if(validar('atualizar')){    
        var dados = $('#formUpdate').serialize();
        
        $.ajax({
            url: 'services/atualizar.php',
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
            if(e == "Atualizado com sucesso")
            $("#containerUpdate").html("")
            $("#buscar").click()
        })
    }
})
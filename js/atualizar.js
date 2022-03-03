// Criando a ação de click no elemento
$('#atualizar').on('click', function(){
    //chamando a função de validação dos dados
    if(validar('atualizar')){
        // recuperando dados do formulario
        var dados = $('#formUpdate').serialize();
        
        // enviando dados para o servidor
        $.ajax({
            url: 'services/atualizar.php',
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
            if(e == "Atualizado com sucesso")
            $("#containerUpdate").html("")
            $("#buscar").click()
        })
    }
})
// Criando a ação de click no elemento
$('#cancelar').on('click', function(){
    $("#containerUpdate").html("")
    $("#buscar").click()
})
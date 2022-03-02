$('#buscar').on('click', function(){
    var dados = $('#formSearch').serialize();
    $.ajax({
        url: 'services/listagem.php',
        type: 'POST',
        data: dados,
        processData: false,
        contetType: false,
        beforeSend: function(){
            $("#requisicao").html("Buscando");
            $("#lista").html("");
        },
        success: function(resposta){
            let lista = [];
            lista = JSON.parse(resposta)
            if(lista.length > 0){
                    $("#table").show()
                }
                else{
                    
                        $("#table").hide()
            }
            $("#requisicao").html("");
            lista.forEach(x => {
                var string = "<tr>"
                string = string + "<td>"
                string = string + x[0];
                string = string + "</td>"
                string = string + "<td>"
                string = string + x[1]
                string = string + "</td>"
                string = string + "<td>"
                string = string + x[5]
                string = string + "</td>"
                string = string + "</tr>"
                $("#lista").append(string);
            });
        },
    });
});
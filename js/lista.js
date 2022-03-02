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
            $("#requisicao").html("Finalizando");
        },
    }).done(function(dados){
        let lista = [];
        lista = JSON.parse(dados)
        $("#requisicao").html("");
        if(lista.length > 0){
            $("#table").show()
        }
        else{
            $("#table").hide()
            $("#requisicao").html("Nenhum dado corresponde a busca")
        }
        lista.forEach(x => {
            var string = "<tr>"
            string = string + "<td class='idCliente'>"
            string = string + x[0];
            string = string + "</td>"
            string = string + "<td>"
            string = string + x[1]
            string = string + "</td>"
            string = string + "<td>"
            string = string + x[5]
            string = string + "</td>"
            string = string + "<td>"
            string = string + "<span onclick='console.log(" + x.id + ")'>Deletar</span>"
            string = string + "</td>"
            string = string + "</tr>"
            $("#lista").append(string);
            console.log(x.id)
        });
    });
});

function deleteData(id){
    console.log(id.toString())
    $.ajax({
        url: 'services/deletar.php',
        type: 'POST',
        data: 'id='+id,
        processData: false,
        contetType: false,
        beforeSend: function(){
            $("#requisicao").html("Apagando...")
        },
        success: function(resposta){
            $("#requisicao").html(resposta)
        },
    });
}
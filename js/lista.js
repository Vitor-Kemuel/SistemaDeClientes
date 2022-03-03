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
    }).done(function(data){
        let lista = [];
        lista = JSON.parse(data)
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
            string = string + x[2]
            string = string + "</td>"
            string = string + "<td>"
            string = string + x[4]
            string = string + "</td>"
            string = string + "<td>"
            string = string + x[5]
            string = string + "</td>"
            string = string + "<td>"
            string = string + x[6]
            string = string + "</td>"
            string = string + "<td>"
            string = string + "<div>"
            string = string + "<span onclick='editData(" + x.id + ")'>Editar</span>"
            string = string + "<span onclick='deleteData(" + x.id + ")'>Deletar</span>"
            string = string + "</div>"
            string = string + "</td>"
            string = string + "</tr>"
            $("#lista").append(string);
        });
    });
});

function editData(id){
    $.ajax({
        url: 'services/getOne.php',
        type: 'POST',
        data: 'id='+id,
        processData: false,
        contetType: false,
        beforeSend: function(){
            $("#requisicao").html("carregando")
        },
        success: function(resposta){
            $("#requisicao").html("")
        },
    }).done(function(data){
        console.log(data)
        cliente = JSON.parse(data)
        $("#requisicao").html(cliente[1])
        console.log(cliente[0])    
        var form = '<form id="formUpdate" name="formUpdate" method="POST">'
        form = form +'<input type="text" name="id" id="idInput" class="input" placeholder="id" value="'+ cliente[0].id +'" style="display: none;">'
        form = form +'<input type="text" name="name" id="nameInput" class="input" placeholder="Nome" value="'+ cliente[0].nome +'">'
        form = form +'<input type="date" name="birthDate" id="birtInput" class="input" placeholder="Data de nascimento" value="'+ cliente[0].data_de_nascimento +'">'
        form = form +'<input type="text" name="cpf" id="cpfInput" class="input" placeholder="CPF" value="'+ cliente[0].cpf +'">'
        form = form +'<input type="text" name="phoneNumber" id="phoneInput" class="input" placeholder="Numero de telefone" value="'+ cliente[0].telefone +'">'
        form = form +'<input type="email" name="email" id="emailInput" class="input" placeholder="E-mail" value="'+ cliente[0].email +'">'
        form = form +'<input type="text" name="address" id="addressInput" class="input" placeholder="Endereço" value="'+ cliente[0].endereco +'">'
        form = form +'<textarea name="comments" id="commentsInput" class="input" placeholder="Observações" rows="3">'+ cliente[0].observacoes +'</textarea>'
        form = form +'<input type="button" form="formUpdate" value="Atualizar" id="atualizar"  class="input">'
        form = form +'</form>'
        form = form +'<script src="js/atualizar.js"></script>'
        var div = document.createElement('div')
        div.setAttribute('id', 'containerForm')
        $("#containerUpdate").append(div)
        $("#containerForm").append(form)
    })
}

function deleteData(id){
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
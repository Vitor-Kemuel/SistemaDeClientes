// Criando a ação de click no elemento
$('#buscar').on('click', function(){
    // recuperando dados do formulario
    var dados = $('#formSearch').serialize();
    // enviando dados para o servidor
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
        // recebendo resposta do servidor
        success: function(resposta){
            $("#requisicao").html("Finalizando");
        },
        //finalizando - retornando dados
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
            string = string + "<span style='cursor: pointer;' onclick='editData(" + x.id + ")'>Editar</span>"
            string = string + "</div>"
            string = string + "<div>"
            string = string + "<span style='cursor: pointer;' onclick='deleteData(" + x.id + ")'>Deletar</spanclass=>"
            string = string + "</div>"
            string = string + "</td>"
            string = string + "</tr>"
            $("#lista").append(string);

        });
    });
});

// definindo função para atualizar dados
function editData(id){
    // requisição de dados por meio do id
    $.ajax({
        url: 'services/getOne.php',
        type: 'POST',
        data: 'id='+id,
        processData: false,
        contetType: false,
        beforeSend: function(){
            $("#requisicao").html("carregando")
        },
        // resposta do servidor
        success: function(resposta){
            $("#requisicao").html("")
        },
        // finalizando - criando formulario para editar
    }).done(function(data){
        console.log(data)
        cliente = JSON.parse(data)
        $("#requisicao").html(cliente[1])
        console.log(cliente[0])

        var inputCss = 'margin: 0 0 10px; padding: 10px;border-radius: 5px;'
        var lineFormCss = 'display: flex;flex-direction: row;width: auto;'
        var inputContainerCss = 'display: flex;flex-direction: column;width: 100%;margin: 0 5px;'
        var formUpdateCss = 'display: flex;flex-direction: column;padding: 10px;max-width: 700px;margin: auto;background: rgb(200,200,200);padding: 20px 15px;border-radius: 20px;'
        
        var form = '<form id="formUpdate" name="formUpdate" method="POST" style="'+ formUpdateCss +'">'
        form = form +'<input type="text" name="id" id="idInput" class="input" placeholder="id" value="'+ cliente[0].id +'" style="display: none;">'
        form = form +'<div style="'+ lineFormCss +'"><div style="'+ inputContainerCss +'">'
        form = form +'<label for="nameInput" class="labelInput">Nome:</label>'
        form = form +'<input type="text" name="name" id="nameInput" style="'+ inputCss +'" placeholder="Nome" value="'+ cliente[0].nome +'">'
        form = form +'</div><div style="'+ inputContainerCss +'">'
        form = form +'<label for="birtInput" class="labelInput">Data de nascimento:</label>'
        form = form +'<input type="date" name="birthDate" id="birtInput" style="'+ inputCss +'" placeholder="Data de nascimento" value="'+ cliente[0].data_de_nascimento +'">'
        form = form +'</div></div>'
        form = form +'<div style="'+ lineFormCss +'"><div style="'+ inputContainerCss +'">'
        form = form +'<label for="cpfInput" class="labelInput">CPF:</label>'
        form = form +'<input type="text" name="cpf" id="cpfInput" style="'+ inputCss +'" placeholder="CPF" value="'+ cliente[0].cpf +'">'
        form = form +'</div><div style="'+ inputContainerCss +'">'
        form = form +'<label for="phoneInput" class="labelInput">Telefone:</label>'
        form = form +'<input type="text" name="phoneNumber" id="phoneInput" style="'+ inputCss +'" placeholder="Numero de telefone" value="'+ cliente[0].telefone +'">'
        form = form +'</div></div>'
        form = form +'<div style="'+ lineFormCss +'"><div style="'+ inputContainerCss +'">'
        form = form +'<label for="emailInput" class="labelInput">E-mail:</label>'
        form = form +'<input type="email" name="email" id="emailInput" style="'+ inputCss +'" placeholder="E-mail" value="'+ cliente[0].email +'">'
        form = form +'</div><div style="'+ inputContainerCss +'">'
        form = form +'<label for="addressInput" class="labelInput">Endereço:</label>'
        form = form +'<input type="text" name="address" id="addressInput" style="'+ inputCss +'" placeholder="Endereço" value="'+ cliente[0].endereco +'">'
        form = form +'</div></div>'
        form = form +'<div style="'+ lineFormCss +'"><div style="'+ inputContainerCss +'">'
        form = form +'<label for="commentsInput" class="labelInput">observação:</label>'
        form = form +'<textarea name="comments" id="commentsInput" style="'+ inputCss +'" placeholder="Observações" rows="3">'+ cliente[0].observacoes +'</textarea>'
        form = form +'</div></div>'
        form = form +'<div style="'+ lineFormCss +'"><div style="'+ inputContainerCss +'">'
        form = form +'<input type="button" form="formUpdate" value="Cancelar" id="cancelar" style="'+ inputCss +'">'
        form = form +'</div><div style="'+ inputContainerCss +'">'
        form = form +'<input type="button" form="formUpdate" value="Atualizar" id="atualizar" style="'+ inputCss +'">'
        form = form +'</div></div>'
        form = form +'</form>'
        form = form +'<script src="js/atualizar.js"></script>'
        var div = document.createElement('div')
        div.setAttribute('id', 'containerForm')
        $("#containerUpdate").append(div)
        $("#containerForm").append(form)
    })
}

// definindo função parar deletar dados
function deleteData(id){
    // envio do identificador dos dados
    $.ajax({
        url: 'services/deletar.php',
        type: 'POST',
        data: 'id='+id,
        processData: false,
        contetType: false,
        beforeSend: function(){
            $("#requisicao").html("Apagando...")
        },
        //retorno do servidor
        success: function(resposta){
            $("#requisicao").html(resposta)
            $("#buscar").click()
        },
    });
}
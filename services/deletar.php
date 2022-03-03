<?php

// Recebendo id por meio de POST
$id = $_POST['id'];

// incluindo serviços de banco de dados
include 'servicoDB.php';

// conectando com o banco de dados
$deletar = new Cliente();

// enviando id para a função de deleção
$row = $deletar->delete($id);

// Retorno para a função ajax
if($row >= 1){
    echo "Cliente deletado com sucesso";
}else{
    echo "falha ao deletar";
}

?>
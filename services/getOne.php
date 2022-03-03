<?php

// Recebendo id por meio de POST
$id = $_POST['id'];

// incluindo serviços de banco de dados
include 'servicoDB.php';

// conectando com o banco de dados
$get = new Cliente();

// enviando dados para a função de leitura unica
$result = $get->readOne($id);

// Retorno dos dados para a função ajax
echo json_encode($result);

?>

<?php

// Recebendo string de busca por meio de POST
$stringSearch = $_POST["textSearch"];

// incluindo serviços de banco de dados
include "servicoDB.php";

// conectando com o banco de dados
$conect = new Cliente();

// enviando dados para a função de leitura
$cliente = $conect->read($stringSearch);

// Retorno dos dados para a função ajax
echo json_encode($cliente);

?>
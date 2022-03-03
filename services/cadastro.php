<?php

// Recebendo dados por meio de POST
$name = $_POST["name"];
$birthDate = $_POST["birthDate"];
$cpf = $_POST["cpf"];
$phoneNumber = $_POST["phoneNumber"];
$email = $_POST["email"];
$address = $_POST["address"];
$comments = $_POST["comments"];

// incluindo serviços de banco de dados
include "servicoDB.php";

// conectando com o banco de dados
$conect = new Cliente();
// enviando dados para a função de inserção
$row = $conect->insert(
    $name,
    $birthDate,
    $cpf,
    $phoneNumber,
    $email,
    $address,
    $comments,
);

// Retorno para a função ajax
if($row >= 1 ){
    echo "Cadastrado com sucesso";
}
else{
    echo 'Ocorreu algum erro ao cadastrar';
}
?>
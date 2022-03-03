<?php

$id = $_POST["id"];
$name = $_POST["name"];
$birthDate = $_POST["birthDate"];
$cpf = $_POST["cpf"];
$phoneNumber = $_POST["phoneNumber"];
$email = $_POST["email"];
$address = $_POST["address"];
$comments = $_POST["comments"];

include "servicoDB.php";

$conect = new Cliente();
$row = $conect->update(
    $id,
    $name,
    $birthDate,
    $cpf,
    $phoneNumber,
    $email,
    $address,
    $comments,
);

if($row >= 1 ){
    echo "Atualizado com sucesso";
}
else{
    echo 'Ocorreu algum erro ao Atualizar';
}
?>
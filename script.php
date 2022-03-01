<?php
$name = $_POST["name"];
$birthDate = $_POST["birthDate"];
$cpf = $_POST["cpf"];
$phoneNumber = $_POST["phoneNumber"];
$email = $_POST["email"];
$address = $_POST["address"];
$comments = $_POST["comments"];

include "services/servicoDB.php";

$conect = new Cliente();
$conect->insert(
    $name,
    $birthDate,
    $cpf,
    $phoneNumber,
    $email,
    $address,
    $comments,
);

header("location: index.php");
?>
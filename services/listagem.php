<?php

$stringSearch = $_POST["textSearch"];

include "servicoDB.php";

$conect = new Cliente();

$cliente = $conect->read($stringSearch);

echo json_encode($cliente);

?>
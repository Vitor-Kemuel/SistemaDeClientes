<?php

$id = $_POST['id'];

include 'servicoDB.php';

$get = new Cliente();

$result = $get->readOne($id);

echo json_encode($result);

?>

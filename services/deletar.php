<?php

$id = $_POST['id'];

include 'servicoDB.php';

$deletar = new Cliente();

$row = $deletar->delete($id);

if($row >= 1){
    echo "Cliente deletado com sucesso";
}else{
    echo "falha ao deletar";
}

?>
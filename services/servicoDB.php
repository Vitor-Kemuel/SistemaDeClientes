<?php

class Cliente
{
    private $conexao;

    public function __construct()
    {
        try {
            $this->conexao = new PDO('mysql:host=localhost;dbname=cadastro', 'root', '');
        } catch (Exception $e) {
            echo $e->getMessage();
            die();
        }
    }

    public function insert(string $name,string $birthDate,string $cpf, string $phoneNumber, string $email, string $adress, string $comments) : int
    {
        $sql = 'insert into cliente(nome, data_de_nascimento, cpf, telefone, email, endereco, observacoes) values(:nome, :data_de_nascimento, :cpf, :telefone, :email, :endereco, :observacoes)';
        echo $sql;

        $prepare = $this->conexao->prepare($sql);

        $prepare->bindParam(':nome', $name);
        $prepare->bindParam(':data_de_nascimento', $birthDate);
        $prepare->bindParam(':cpf', $cpf);
        $prepare->bindParam(':telefone', $phoneNumber);
        $prepare->bindParam(':email', $email);
        $prepare->bindParam(':endereco', $adress);
        $prepare->bindParam(':observacoes', $comments);

        $prepare->execute();

        return $prepare->rowCount();
    }
}
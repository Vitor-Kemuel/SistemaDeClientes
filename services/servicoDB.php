<?php

class Cliente
{
    private $conexao;

    public function __construct()
    {
        try {
            $this->conexao = new PDO('mysql:host=localhost;dbname=cadastro', 'root', '');
        } catch (Exception $e) {
            echo 'Não foi possivel se conectar com o banco de dados';
            die();
        }
    }

    public function insert(string $name,string $birthDate,string $cpf, string $phoneNumber, string $email, string $adress, string $comments) : int
    {
        $sql = 'insert into cliente(nome, data_de_nascimento, cpf, telefone, email, endereco, observacoes) values(:nome, :data_de_nascimento, :cpf, :telefone, :email, :endereco, :observacoes)';
        // echo $sql;

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

    public function read($busca)
    {
        $sql = 'select * from cliente where nome like \'%'. $busca .'%\' or email like \'%'. $busca .'%\' LIMIT 10';
        // echo $sql;
        
        $clientes = [];

        foreach ($this->conexao->query($sql) as $key => $value)
        {
            array_push($clientes, $value);
        }

        return $clientes;
    }

    public function readOne(string $id)
    {
        $sql = 'select * from cliente where id=\'' . $id. '\'';
        
        $cliente = [];

        foreach ($this->conexao->query($sql) as $key => $value)
        {
            array_push($cliente, $value);
        }

        return $cliente;
    }

    public function update(string $id, string $name,string $birthDate,string $cpf, string $phoneNumber, string $email, string $adress, string $comments)
    {
        $sql = 'update cliente set nome = :nome, data_de_nascimento = :data_de_nascimento, cpf = :cpf, telefone = :telefone, email = :email, endereco = :endereco, observacoes = :observacoes where id=:id';
        // echo $sql;
        
        $prepare = $this->conexao->prepare($sql);
        
        $prepare->bindParam(':id', $id);
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

    public function delete(string $id)
    {
        $sql = 'delete from cliente where id=\'' . $id . '\'';

        $prepare = $this->conexao->prepare($sql);

        $prepare->execute();
        
        return $prepare->rowCount();
    }
}
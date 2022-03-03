<?php

class Cliente
{
    private $conexao;

    // Metodo construtor da classe
    public function __construct()
    {
        try {
            // string de conexão com o banco
            $this->conexao = new PDO('mysql:host=localhost;dbname=cadastro', 'root', '');
        } catch (Exception $e) {
            echo 'Não foi possivel se conectar com o banco de dados';
            die();
        }
    }

    // Metrodo insert
    public function insert(string $name,string $birthDate,string $cpf, string $phoneNumber, string $email, string $adress, string $comments) : int
    {
        // string de inserção de dados
        $sql = 'insert into cliente(nome, data_de_nascimento, cpf, telefone, email, endereco, observacoes) values(:nome, :data_de_nascimento, :cpf, :telefone, :email, :endereco, :observacoes)';

        // preparando a conxão
        $prepare = $this->conexao->prepare($sql);
        
        // adicionando os parametros em seus lugares
        $prepare->bindParam(':nome', $name);
        $prepare->bindParam(':data_de_nascimento', $birthDate);
        $prepare->bindParam(':cpf', $cpf);
        $prepare->bindParam(':telefone', $phoneNumber);
        $prepare->bindParam(':email', $email);
        $prepare->bindParam(':endereco', $adress);
        $prepare->bindParam(':observacoes', $comments);
        
        // executando o comando
        $prepare->execute();
        
        // retornando a quantidade de linhas afetadas
        return $prepare->rowCount();
    }

    public function read($busca)
    {
        // String de leitura
        $sql = 'select * from cliente where nome like \'%'. $busca .'%\' or email like \'%'. $busca .'%\' LIMIT 10';
        
        // array para guardar os dados
        $clientes = [];

        // foreach com query
        foreach ($this->conexao->query($sql) as $key => $value)
        {
            // inserção de dados no array
            array_push($clientes, $value);
        }

        // retornando array com clientes
        return $clientes;
    }

    public function readOne(string $id)
    {
        // String de leitura
        $sql = 'select * from cliente where id=\'' . $id. '\'';
        
        // array para guardar os dados
        $cliente = [];

        // foreach com query
        foreach ($this->conexao->query($sql) as $key => $value)
        {
            // inserção de dados no array
            array_push($cliente, $value);
        }

        // retornando array com dados
        return $cliente;
    }

    // Metodo de atualização
    public function update(string $id, string $name,string $birthDate,string $cpf, string $phoneNumber, string $email, string $adress, string $comments)
    {
        // string de atualização de dados
        $sql = 'update cliente set nome = :nome, data_de_nascimento = :data_de_nascimento, cpf = :cpf, telefone = :telefone, email = :email, endereco = :endereco, observacoes = :observacoes where id=:id';
        
        // preparando a conxão
        $prepare = $this->conexao->prepare($sql);
        
        // adicionando os parametros em seus lugares
        $prepare->bindParam(':id', $id);
        $prepare->bindParam(':nome', $name);
        $prepare->bindParam(':data_de_nascimento', $birthDate);
        $prepare->bindParam(':cpf', $cpf);
        $prepare->bindParam(':telefone', $phoneNumber);
        $prepare->bindParam(':email', $email);
        $prepare->bindParam(':endereco', $adress);
        $prepare->bindParam(':observacoes', $comments);
        
        // executando o comando
        $prepare->execute();
        
        // retornando a quantidade de linhas afetadas
        return $prepare->rowCount();
    }

    // Metodo de deleção
    public function delete(string $id)
    {
        // string de atualização de dados
        $sql = 'delete from cliente where id=\'' . $id . '\'';

        // preparando a conxão
        $prepare = $this->conexao->prepare($sql);

        // executando o comando
        $prepare->execute();
        
        // retornando a quantidade de linhas afetadas
        return $prepare->rowCount();
    }
}
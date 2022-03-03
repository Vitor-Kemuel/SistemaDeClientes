# Teste prático

Ola, sou vitor e este projeto foi um desafio dado a mim.

O Sistema se trata de uma solução para realizar o cadastro, a leitura, atualizações e deleções de dados de clientes

## Tecnologias
Para a utilização do projeto foram utilizadas varias tecnologias que estão listadas a seguir.
### Para o front-end
- HTML
- CSS
- JavaScript
### Para o back-end
- PHP
### Para o banco de dados
- MySQL
<hr>

## Detalhes
Para a realização e desenvolvimento do projeto foi utilizado o pacote de servidores XAMPP
<hr>

## Instruções para utilizar
### 1º Passo
Primeiramente é necessário a criação do banco de dados, lembrando que, o banco de dados do qual utilizei foi o MySQL do pacote XAMPP. o script com o codigo de criação do banco de dados se encontra na raiz do projeto com o nome de "script.sql"

### 2º Passo
A seguir se faz mister a execução do projeto em um servidor. O servidor do qual utilizer foi o "Apache". Caso esteja utilizando do mesmo, basta colar toda a raiz do projeto na pasta do servidor que por padrao se encontra em "C:\xampp\htdocs".

### 3º Passo
Basta acessar o servidor local e utilizar o sistema.

<hr>

## Instruções do sitema
O sistema se trata de uma aplicação bem simples, no lado direito do cabeçalho se encontra duas ancoras que pode levar o usuario para a tela de cadastro ou para a tela de listagem.

### A tela de cadastro
Na tela de cadastro temos um formulario onde se deve digitar as informações do cliente, as informações serão validadas assim que o usuário tentar enviar os dados e caso os dados sejam condizentes com o esperado, será feito o armazenamento desses dados no banco.

### A tela de listagem
Diferente da tela citada anteriormente, a tela de listagem não tem apenas uma função, ela possui as outras 3 funções do sitema.

A primeira função se encontra no centro da tela, logo a baixo do cabeçalho, se trata da função de leitura, basta digitar o nome ou email do cliente que o sistema retornara as informações condizentes com o digitado.

A segunda e terceira função estão ao lado uma da outra, elas se encontram ao lado direito de cada linha da lista de clientes.

O botão "Editar" abre um formulario com os dados do cliente da respectiva linha, nele se pode alterar os dados com a opção de salvar ou cancelar a ação.

O botão "deletar" faz uma requisição ao servidor para deletar os dados do cliente da respectiva linha.
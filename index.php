<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <script src="js/validar.js"></script>
    <title>Cadastro</title>
</head>
<body>
    <form id="formCadastro" name="formCadastro" method="POST">
        <input type="text" name="name" id="nameInput" class="input" placeholder="Nome">
        <input type="date" name="birthDate" id="birtInput" class="input" placeholder="Data de nascimento">
        <input type="text" name="cpf" id="cpfInput" class="input" placeholder="CPF">
        <input type="text" name="phoneNumber" id="phoneInput" class="input" placeholder="Numero de telefone">
        <input type="email" name="email" id="emailInput" class="input" placeholder="E-mail">
        <input type="text" name="address" id="addressInput" class="input" placeholder="Endereço">
        <textarea name="comments" id="commentsInput" class="input" placeholder="Observações" rows="3"></textarea>
        <input type="button" form="formCadastro" value="Cadastrar" id="cadastrar"  class="input">
    </form>
    <div id="resposta"></div>
    <script type="text/javascript" src="js/jQuery/jquery.js"></script>
    <script src="js/cadastrar.js"></script>
</body>
</html>
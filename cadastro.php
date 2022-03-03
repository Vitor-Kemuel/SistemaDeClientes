<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <link rel="stylesheet" href="styles/home.css">
    <script src="js/validar.js"></script>
    <title>Cadastro</title>
</head>
<body>
    <header id="cabecalho">
        <h2 id="tituloCabecalho">Teste prático</h2>
        <div id="containerAncoras">
            <a class="ancora" href="cadastro.php">Cadastro</a>
            <a class="ancora" href="lista.php">Lista</a>
        </div>
    </header>
    <form id="formCadastro" name="formCadastro" method="POST">
        <div class="lineForm">
            <div class="inputContainer">
                <label for="nameInput" class="labelInput">Nome:</label>
                <input type="text" name="name" id="nameInput" class="input" placeholder="Nome">
            </div>
            <div id="birthDateInputContainer"class="inputContainer">
                <label for="birtInput" class="labelInput">Data de nascimento:</label>
                <input type="date" name="birthDate" id="birtInput" class="input" placeholder="Data de nascimento">
            </div>
        </div>
        <div class="lineForm">
            <div class="inputContainer">
                <label for="cpfInput" class="labelInput">CPF:</label>
                <input type="text" name="cpf" id="cpfInput" class="form-control cpf-mask input" placeholder="CPF">
            </div>
            <div class="inputContainer">
                <label for="phoneInput" class="labelInput">Telefone:</label>
                <input type="text" name="phoneNumber" id="phoneInput" class="form-control cel-sp-mask input" placeholder="Numero de telefone">
            </div>
        </div>
        <div class="lineForm">
            <div class="inputContainer">
                <label for="emailInput" class="labelInput">E-mail:</label>
                <input type="email" name="email" id="emailInput" class="input" placeholder="E-mail">
            </div>
            <div class="inputContainer">
                <label for="addressInput" class="labelInput">Endereço:</label>
                <input type="text" name="address" id="addressInput" class="input" placeholder="Endereço">
            </div>
        </div>
        <div class="lineForm">
            <div class="inputContainer">
                <label for="commentsInput" class="labelInput">Observação:</label>
                <textarea name="comments" id="commentsInput" class="input" placeholder="Observações" rows="3"></textarea>
            </div>
        </div>
        <input type="button" form="formCadastro" value="Cadastrar" id="cadastrar"  class="input">
    </form>
    <div id="resposta"></div>
    <!-- <script type="text/javascript" src="js/jQuery/jquery.js"></script> -->
    <script type="text/javascript" src="//code.jquery.com/jquery-2.0.3.min.js"></script>
    <script type="text/javascript" src="//assets.locaweb.com.br/locastyle/2.0.6/javascripts/locastyle.js"></script>
    <script type="text/javascript" src="//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
    <script src="js/cadastrar.js"></script>
</body>
</html>
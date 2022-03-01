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
    <form id="form" name="formCadastro" action="script.php" method="POST">
        <input type="text" name="name" id="nameInput" class="input" placeholder="nome">
        <input type="date" name="birthDate" id="birtInput" class="input" placeholder="birthDate">
        <input type="text" name="cpf" id="cpfInput" class="input" placeholder="cpf">
        <input type="text" name="phoneNumber" id="phoneInput" class="input" placeholder="phoneNumber">
        <input type="email" name="email" id="emailInput" class="input" placeholder="email">
        <input type="text" name="address" id="addressInput" class="input" placeholder="address">
        <textarea name="comments" id="commentsInput" class="input" placeholder="comments" rows="3"></textarea>
        <button type="submit" onclick="return validar()" class="input">Enviar</button>
    </form>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Cadastro</title>
</head>
<body>
    <form id="form" action="script.php" method="POST">
        <input type="text" name="name" id="nameInput" class="input">
        <input type="date" name="birthDate" id="birtInput" class="input">
        <input type="text" name="cpf" id="cpfInput" class="input">
        <input type="text" name="phoneNumber" id="phoneInput" class="input">
        <input type="email" name="email" id="emailInput" class="input">
        <input type="text" name="address" id="addressInput" class="input">
        <input type="text" name="comments" id="commentsInput" class="input">
        <button type="submit" class="input">Enviar</button>
    </form>
</body>
</html>
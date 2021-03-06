<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="styles/lista.css">
        <link rel="stylesheet" href="styles/home.css">
        <script type="text/javascript" src="js/jQuery/jquery.js" defer></script>
        <script src="js/lista.js" defer></script>
        <script src="js/validar.js"></script>
        <title>Document</title>
    </head>
<body>
    <header id="cabecalho">
        <h2 id="tituloCabecalho">Teste prático</h2>
        <div id="containerAncoras">
            <a class="ancora" href="cadastro.php">Cadastro</a>
            <a class="ancora" href="lista.php">Lista</a>
        </div>
    </header>
    <form id="formSearch" name="formSearch" method="POST">
        <input type="text" name="textSearch" id="textSearch">
        <span id="buscar">Buscar</span>
    </form>
    <div id="requisicao"></div>
    <table id="table" style="display: none;" class="table table-striped table-hover">
        <thead>
            <tr>
                <th class='idCliente'>
                    id
                </th>
                <th>
                    Nome
                </th>
                <th>
                    Data de nascimento
                </th>
                <th>
                    Numero de telefone
                </th>
                <th>
                    E-mail
                </th>
                <th>
                    Endereço
                </th>
            </tr>
        </thead>
        <tbody id="lista">
        </tbody>
    </table>
    <div id="containerUpdate"></div>
</body>
</html>
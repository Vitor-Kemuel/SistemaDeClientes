<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Document</title>
    </head>
<body>
    <form id="formSearch" name="formSearch" method="POST">
        <input type="text" name="textSearch" id="textSearch">
        <input type="button" form="formSearch" value="Buscar" id="buscar"  class="input">
    </form>
    <div id="requisicao"></div>
    <table id="table"  class="table table-striped table-hover">
        <thead>
            <tr>
                <th>
                    id
                </th>
                <th>
                    Nome
                </th>
                <th>
                    E-mail
                </th>
            </tr>
        </thead>
        <tbody id="lista">
        </tbody>
    </table>
    <script type="text/javascript" src="js/jQuery/jquery.js"></script>
    <script src="js/lista.js"></script>
</body>
</html>
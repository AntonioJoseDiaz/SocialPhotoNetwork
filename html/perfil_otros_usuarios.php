<!DOCTYPE html>
<html lang="en">
<head>

<?php include 'imports.php' ?>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php include 'header.php' ?>
    <div class="row">
      <div class="col-md text-center">
        <h1>Perfil</h1>
      </div>
    </div>
    <div class="row"><p></p></div>

    <div  class="container lineaperfil">

        <div class="row ">
            <div class="col-md perfil text-center">
                <div class="row text-center">
                <img src="../images/icono_user.png" class="icono2" ><h1 class="perfilname" id="nombreperfil"></h1>
                </div>
                
            </div>
            <div class="col-md text-right">
                <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown">Datos
                        <span class="caret"></span></button>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <h5>Nombre:<h6 id="nombre"></h6></h5>
                    <h5>Apellido:<h6 id="apellido"></h6></h5>
                    <h5>Telefono:<h6 id="telefono"></h6></h5>
                    </div>
                </div>
            </div>
            
        </div>
        
        <h2 class="text-center"></h2>

        <div class="row">
            

        </div>

    <br>
    </div>

    <?php include 'footer.php' ?>
    <script src="../js/perfil_otros_usuarios.js"></script>
</body>

</html>

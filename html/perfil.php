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
                <div class="row">
                <img src="../images/icono_user.png" class="icono2" ><h1 class="perfilname" id="nombreUsusario"></h1>
                </div>
                
            </div>
            <div class="col-md text-right">
                <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown">Ajustes
                        <span class="caret"></span></button>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item text-center" onclick="logout()" href="index.php">Cerrar Sesión</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row separado">
            <div class="col-md text-center">
                <a class="nav-link" href="mis_fotos.php"><h2>Mis Fotos</h2></a>
            </div>
            <div class="col-md text-center">
                <a class="nav-link" href="añadir_foto.php" id="añadir_fotos"><h2>Añadir Foto</h2></a>
            </div>
            <div class="col-md text-center">
                <a class="nav-link" href="usuarios_seguidos.php"><h2>Seguidos</h2></a>
            </div>

        </div>

        <div class="row">
            

        </div>
        <br>

    </div>

    <?php include 'footer.php' ?>
    <script src="../js/perfil.js"></script>
</body>

</html>

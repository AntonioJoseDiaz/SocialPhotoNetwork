<!doctype HTML>
<html>

<head>
  <?php include 'imports.php' ?>
  <title>Algo</title>
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
                <h1><img src="../images/icono_user.png" class="icono2">Mi usuario</h1>
            </div>
            <div class="col-md text-right">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDesplegableId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Datos
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <p id="nombre" ></p>
                            <p id="apellidos" ></p>
                            <p id="email" ></p>
                        </div>
                    </li>    
                </ul>
            </div>
        </div>
        <div class="row separado">
            <div class="col-md text-center">
                <a class="nav-link" href="mis_fotos.php"><h2>Mis Fotos</h2></a>
            </div>
            <div class="col-md text-center">
                <a class="nav-link" href="añadir_foto.php"><h2>Añadir Foto</h2></a>
            </div>
            <div class="col-md text-center">
                <a class="nav-link" href="usuarios_seguidos.php"><h2>Seguidos</h2></a>
            </div>

        </div>

        <div class="row">
            <div class="col-md text-center">
                <a href="photo_detail.php"><img src="../images/29.jpg"></a>            
            </div>
            <div class="col-md text-center">
                <img src="../images/13.jpg">
            </div>
            <div class="col-md text-center">
                <img src="../images/26.jpg">
            </div>

        </div>


    </div>

    <?php include 'footer.php' ?>
</body>

</html>